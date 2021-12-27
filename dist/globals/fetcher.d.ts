export declare type FetcherOption = {
    url: string;
    type?: 'text' | 'json';
    headers?: RequestInit['headers'];
    method?: RequestInit['method'];
    body?: RequestInit['body'];
    credentials?: RequestInit['credentials'];
};
export declare const fetcher: ({ url, type, headers, method, body, credentials, }: FetcherOption) => Promise<any>;
