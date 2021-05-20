import HttpClient, { HttpClientConfg, RequestInterceptor, ResponseInterceptor, HttpClientError } from './http-client'
import { Err, Result, Ok } from 'ts-results';
import { DocumentNode, print } from 'graphql';

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

export interface GraphQLResponse {
    data: unknown,
    errors?: GraphQLErrorResponse[],
}

function isGraphQLResponse(response: unknown): response is GraphQLResponse {
    return (response as GraphQLResponse).data !== undefined;
  }

export interface GraphQLError extends Error {
    request: GraphQLRequest
    response: GraphQLResponse
}

export class GraphQLClient {
    protected http: HttpClient;
    protected endpoint: string;

    constructor(endpoint: string, options: HttpClientConfg = {}) {
        this.endpoint = endpoint
        options.headers = options.headers || {}
        options.headers['content-type'] = options.headers['content-type']  || 'application/json'
        this.http = new HttpClient(options)
    }

    async execute(query: string | DocumentNode, variables?: unknown, options?: HttpClientConfg): Promise<Result<unknown, HttpClientError<GraphQLResponse> | GraphQLError>> {
        if (typeof query !== 'string') {
            query = print(query)
        }
        const data: GraphQLRequest = {
            query: query,
            variables: variables,
        }

        const result = await this.http.post<GraphQLResponse>(this.endpoint, data, options)
        if (result.err && isGraphQLResponse(result.val.data)) {
            result.val.message = result.val.data?.errors?.map((e: { message: string }) => e.message).join('\n') || result.val.message
            return Err(result.val)
        } else if (isGraphQLResponse(result.val.data)) {
            return Ok(result.val.data.data)
        } else {
            const error: GraphQLError = {
                name: 'Unexpected response',
                message: 'Unexpected response',
                stack: (new Error()).stack,
                request: data,
                response: result.val.data as GraphQLResponse
            }
            return Err(error)
        }
    }

    onRequest(handler: RequestInterceptor): ReturnType<HttpClient["onRequest"]> {
        return this.http.onRequest(handler)
    }

    onResponse(handler: ResponseInterceptor) : ReturnType<HttpClient["onResponse"]> {
        return this.http.onResponse(handler)
    }
}