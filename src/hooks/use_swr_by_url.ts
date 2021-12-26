import useSWR from 'swr';

type ResponseType = 'text' | 'json' | undefined;

const fetcher = async (url: string, type: ResponseType = 'json') => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`server error: ${JSON.stringify(response)}`);
    }

    if (type === 'text') {
      const text = await response.text();
      return text;
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};

export function useSWRByURL<Data = any, Error = any>(
  url: string,
  type: ResponseType = 'json',
) {
  return useSWR<Data, Error>(url, () => fetcher(url, type));
}
