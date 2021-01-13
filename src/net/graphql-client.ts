import HttpClient, { HttpClientConfg, RequestInterceptor, ResponseInterceptor, HttpClientError } from './http-client'
import { Err, Result, Ok } from 'ts-results';
import { DocumentNode, print } from 'graphql';

export interface GraphQLRequest {
    query: string,
    variables?: any,
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
    data: any,
    errors?: GraphQLErrorResponse[],
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

    async execute(query: string | DocumentNode, variables?: any, options?: HttpClientConfg): Promise<Result<any, HttpClientError>> {
        if (typeof query !== 'string') {
            query = print(query)
        }
        const data: GraphQLRequest = {
            query: query,
            variables: variables,
        }

        const result = await this.http.post<GraphQLResponse>(this.endpoint, data, options)
        if (result.err) {
            result.val.message = result.val.data?.errors?.map((e: { message: string }) => e.message).join('\n') || result.val.message
            return Err(result.val)
        }
        return Ok(result.val.data.data)
    }

    onRequest(handler: RequestInterceptor) {
        return this.http.onRequest(handler)
    }

    onResponse(handler: ResponseInterceptor) {
        return this.http.onResponse(handler)
    }
}