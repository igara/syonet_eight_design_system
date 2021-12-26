import useSWR from 'swr';
import { fetcher, FetcherType } from '@design_system/src';

export function useSWRByURL<Data = any, Error = any>(
  url: string,
  type: FetcherType = 'json',
) {
  return useSWR<Data, Error>(url, () => fetcher(url, type));
}
