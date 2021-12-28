export declare type FetcherOption = {
    url: string;
    type?: 'text' | 'json';
    headers?: RequestInit['headers'];
    method?: RequestInit['method'];
    bodyObject?: Object;
};
export declare const fetcher: ({ url, type, headers, method, bodyObject, }: FetcherOption) => Promise<any>;
