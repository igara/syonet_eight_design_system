import useSWR from 'swr';
import { fetcher, FetcherOption } from '@design_system/src';

export function useSWRByURL<Data = any, Error = any>(option: FetcherOption) {
  return useSWR<Data, Error>(option.url, () => fetcher(option));
}
