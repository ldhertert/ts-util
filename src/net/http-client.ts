import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface Headers {
    [key: string]: string
}

export interface Params {
    [key: string]: string | boolean | number
}

export type Method = "get" | "post" | "put" | "delete"

export interface RequestConfig {
    baseURL?: string
    headers?: Headers
    params?: Params
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    validateStatus?: ((status: number) => boolean)
}

export interface Response {
    headers: Headers,
    status: number,
    statusText: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    request?: RequestConfig
}

function fromAxiosRequestConfig(config: AxiosRequestConfig) {
    return {
        baseURL: config.baseURL,
        data: config.data,
        headers: config.headers,
        params: config.params
    }
}

export default class HttpClient {
    client: AxiosInstance

    constructor(defaults: RequestConfig = {}) {
        const axiosOpts = defaults as AxiosRequestConfig
        this.client = axios.create(axiosOpts)
    }

    async request<T>(url: string, method: Method = 'get', opts: RequestConfig = {}): Promise<T> {
        const axiosOpts = opts as AxiosRequestConfig
        axiosOpts.url = url
        axiosOpts.method = method        
        const result = await this.client.request<T>(axiosOpts)
        return result.data
    }

    async get<T>(url: string, opts: RequestConfig = {}): Promise<T> {
        return this.request(url, 'get', opts)
    }

    async post<T>(url: string, data?: unknown, opts: RequestConfig = {}): Promise<T> {
        opts.data = data
        return this.request(url, 'post', opts)
    }

    async put<T>(url: string, data?: unknown, opts: RequestConfig = {}): Promise<T> {
        opts.data = data
        return this.request(url, 'put', opts)
    }

    async delete<T>(url: string, opts: RequestConfig = {}): Promise<T> {
        return this.request(url, 'get', opts)
    }

    onRequest(handler: (config: RequestConfig) => Promise<RequestConfig>): void {
        this.client.interceptors.request.use(async config => {
            const result = await handler(fromAxiosRequestConfig(config))
            config.baseURL = result.baseURL
            config.data = result.data
            config.headers = result.headers
            config.params = result.params
            return config
        })
    }

    onResponse(handler: (response: Response) => Promise<Response>): void {
        this.client.interceptors.response.use(async response => {
            const result = await handler({
                headers: response.headers,
                status: response.status,
                statusText: response.statusText,
                data: response.data,
                request: fromAxiosRequestConfig(response.request)
            })
            response.headers = result.headers
            response.status = result.status
            response.statusText = result.statusText
            response.data = result.data
            return response
        })
    }
}