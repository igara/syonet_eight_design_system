import { FetcherType } from '@design_system/src';
export declare function useSWRByURL<Data = any, Error = any>(url: string, type?: FetcherType): import("swr").SWRResponse<Data, Error>;
