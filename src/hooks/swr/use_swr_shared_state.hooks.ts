import useSWR from 'swr';

export const useSWRSharedState = <T>(key: string, initial?: T) => {
  const { data: state, mutate: setState } = useSWR(
    key,
    null,
    initial
      ? {
          fallbackData: initial,
        }
      : {},
  );
  return [state, setState] as [T, (value: T) => void];
};
