export type FetcherOption = {
  url: string;
  type?: 'text' | 'json';
  headers?: RequestInit['headers'];
  method?: RequestInit['method'];
  bodyObject?: Object;
};

type FetchOption = {
  headers: FetcherOption['headers'];
  method: FetcherOption['method'];
  body?: RequestInit['body'];
};

export const fetcher = async ({
  url = '',
  type = 'json',
  headers = {},
  method = 'GET',
  bodyObject = {},
}: FetcherOption) => {
  try {
    let fetchOption: FetchOption = {
      headers,
      method,
    };

    if (method === 'POST') {
      fetchOption = {
        ...fetchOption,
        body: JSON.stringify(bodyObject),
      };
    }

    const response = await fetch(url, fetchOption);
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
