declare type ResponseType = 'text' | 'json' | undefined;
export declare function useSWRByURL<Data = any, Error = any>(url: string, type?: ResponseType): import("swr").SWRResponse<Data, Error>;
export {};
