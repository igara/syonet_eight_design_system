export type FetcherOption = {
  url: string;
  type?: 'text' | 'json';
  headers?: RequestInit['headers'];
  method?: RequestInit['method'];
  body?: RequestInit['body'];
  credentials?: RequestInit['credentials'];
};

export const fetcher = async ({
  url = '',
  type = 'json',
  headers = {},
  method = 'GET',
  body,
  credentials,
}: FetcherOption) => {
  try {
    const response = await fetch(url, {
      headers,
      method,
      body,
      credentials,
    });
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
