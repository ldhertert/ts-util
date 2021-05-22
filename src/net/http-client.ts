import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Result, Err, Ok } from 'ts-results';
import { URL } from 'url'

interface Headers {
    [key: string]: string | boolean | number
}
type Params = Headers

interface RequestMetadata<T> {
    request: {
        query: Params,
        headers: Headers,
        method?: string,
        url: string,
    },
    response: {
        headers: Headers,
        status: number,
        statusText: string,
        content?: T,
    },
}

function isAxiosError(error: unknown): error is AxiosError {
    return (error as AxiosError).isAxiosError !== undefined;
}

export interface HttpClientError<T> extends Error {
    http?: RequestMetadata<T>
    data?: unknown
}

type HttpResult<T> = { data: T, http: RequestMetadata<T> };
type WrappedResultPromise<T> = Promise<Result<HttpResult<T>, HttpClientError<T>>>

type ExposedAxiosConfigProps = Pick<AxiosRequestConfig,
    'baseURL' | 'url' | 'timeout' | 'responseType' |
    'transformRequest' | 'transformResponse' | 'method' |
    'data' >
export interface HttpClientConfg extends ExposedAxiosConfigProps {
    headers?: Headers,
    params?: Params,
}

export type RequestInterceptor = (config: AxiosRequestConfig) => Promise<AxiosRequestConfig> | void

export type ResponseInterceptor = (response: AxiosResponse<unknown>) => Promise<AxiosResponse<unknown>> | void

export default class HttpClient {
    protected client: AxiosInstance

    constructor(config?: HttpClientConfg) {
        this.client = axios.create(config)
    }

    async request<T>(url: string, options?: HttpClientConfg): WrappedResultPromise<T> {
        options = options || {}
        options.url = url

        try {
            const response = await this.client.request<T>(options)
            const result = { 
                data: response.data,
                http: HttpClient.extractRequestMetadata<T>(response)
            }
            return Ok(result)
        } catch(err) {
            const error: HttpClientError<T> = {
                name: err.name,
                message: err.message,
                stack: (new Error()).stack,
            }

            if (isAxiosError(err)) {
                error.data = err.response?.data,
                error.http = err.response ? HttpClient.extractRequestMetadata(err.response) : undefined
            } 
            return Err(error)
        }
    }

    async get<T = unknown>(url: string, params?:  Params, options?: HttpClientConfg): WrappedResultPromise<T> {
        options = options || {}
        options.params = options.params || params
        options.method = 'get'
        const response = await this.request<T>(url, options)
        return response
    }

    async post<T = unknown>(url: string, data?:  unknown, options?: HttpClientConfg): WrappedResultPromise<T> {
        options = options || {}
        options.data = data
        options.method = 'POST'
        const response = await this.request<T>(url, options)
        return response
    }

    async put<T = unknown>(url: string, data?:  unknown, options?: HttpClientConfg): WrappedResultPromise<T> {
        options = options || {}
        options.data = data
        options.method = 'put'
        const response = await this.request<T>(url, options)
        return response
    }

    async delete<T = unknown>(url: string, options?: HttpClientConfg): WrappedResultPromise<T> {
        options = options || {}
        options.method = 'delete'
        const response = await this.request<T>(url, options)
        return response
    }

    static extractRequestMetadata<T>(response: AxiosResponse): RequestMetadata<T> {
        return {
            request: {
                url: new URL(response.config.url || '/', response.config.baseURL).href,
                method: response.config.method,
                query: response.config.params,
                headers: response.config.headers,
            },
            response: {
                headers: response.headers,
                status: response.status,
                statusText: response.statusText,
                content: response.data,
            },
        }
    }

    onRequest(handler: RequestInterceptor): { eject: () => void; } {
        const interceptor = this.client.interceptors.request.use(async conf => {
            const result = await handler(conf)
            return result || conf
        })
        return {
            eject: () => this.client.interceptors.response.eject(interceptor),
        }
    }

    onResponse(handler: ResponseInterceptor): { eject: () => void; } {
        const interceptor = this.client.interceptors.response.use(async response => {
            const result = await handler(response)
            return result || response
        })
        return {
            eject: () => this.client.interceptors.response.eject(interceptor),
        }
    }
}