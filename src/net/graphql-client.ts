// import HttpClient, { HttpClientConfg, RequestInterceptor, ResponseInterceptor, HttpClientError } from './http-client'
import { DocumentNode, print, getIntrospectionQuery, printSchema, buildClientSchema, IntrospectionQuery } from 'graphql';
import HttpClient, { RequestConfig } from './http-client'
import { fromIntrospectionQuery } from 'graphql-2-json-schema';

export interface GraphQLRequest {
    query: string,
    variables?: unknown,
}

interface ErrorLocation {
    line: number,
    column: number,
}

export interface GraphQLErrorResponse {
    message: string,
    locations: ErrorLocation[],
}

export interface GraphQLResponse<T> {
    data: T,
    errors?: GraphQLErrorResponse[],
}

// function isGraphQLResponse(response: unknown): response is GraphQLResponse {
//     return (response as GraphQLResponse).data !== undefined;
// }

export interface GraphQLError extends Error {
    request: GraphQLRequest
    response: GraphQLResponse<unknown>
}

export class GraphQLClient {
    protected endpoint: string;
    protected http: HttpClient;

    constructor(endpoint: string, options: RequestConfig = {}) {
        options.headers = options.headers || {}
        options.headers['content-type'] = options.headers['content-type']  || 'application/json'
        this.http = new HttpClient(options)
        this.endpoint = endpoint
    }

    protected handleError(request: GraphQLRequest, result: GraphQLResponse<unknown>): void {
        if (result && result.errors && result.errors?.length > 0) {
            const error: GraphQLError = {
                name: 'GraphQLError',
                message: result.errors?.map(e => e.message).join("\n"),
                stack: (new Error()).stack,
                request: request,
                response: result as GraphQLResponse<unknown>
            }
            throw error
        }
    }

    async execute<T>(query: string | DocumentNode, variables?: unknown, options?: RequestConfig): Promise<GraphQLResponse<T>> {
        const data: GraphQLRequest = {
            query: (typeof query !== 'string') ? print(query) : query,
            variables: variables,
        }

        // eslint-disable-next-line no-useless-catch
        try {
            const result = await this.http.post<GraphQLResponse<T>>(this.endpoint, data, options)
            this.handleError(data, result)
            return result
        } catch (err) {
            throw err
        }

    }

    async getIntrospectionResult(): Promise<IntrospectionQuery> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const introspectionResult: any = await this.execute(getIntrospectionQuery())
        return introspectionResult.data as IntrospectionQuery
    }

    async getSchema(): Promise<string> {
        const introspection = await this.getIntrospectionResult()
        const sdlFormat = printSchema(buildClientSchema(introspection))
        return sdlFormat

    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async getJsonSchema(): Promise<any> {
        const introspection = await this.getIntrospectionResult()
        const options = {
            ignoreInternals: true,
            nullableArrayItems: true
        }

        const jsonSchema = fromIntrospectionQuery(introspection, options);
        return jsonSchema

    }
}