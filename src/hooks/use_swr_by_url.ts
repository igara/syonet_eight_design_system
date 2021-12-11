import useSWR from 'swr';

const fetcher = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`server error: ${JSON.stringify(response)}`);
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const useSWRByURL = (url: string) => {
  return useSWR(url, fetcher);
};
