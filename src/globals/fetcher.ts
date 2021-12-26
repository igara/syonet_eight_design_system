export type FetcherType = 'text' | 'json' | undefined;

export const fetcher = async (url: string, type: FetcherType = 'json') => {
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
