import useSWR from 'swr';

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`server error: ${JSON.stringify(response)}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};

export function useSWRByURL<Data = any, Error = any>(url: string) {
  return useSWR<Data, Error>(url, fetcher);
}
