export declare type FetcherType = 'text' | 'json' | undefined;
export declare const fetcher: (url: string, type?: FetcherType) => Promise<any>;
