import React from 'react';

export const useIsFirstTimeState = (isFirstTime?: boolean) => {
  return React.useState(isFirstTime);
};

export const useIsOpenState = (isOpen: boolean) => {
  return React.useState(isOpen);
};

export const useCloseCallback = (
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return React.useCallback(() => {
    setIsopen(false);
  }, [setIsopen]);
};

export const useFirstTimeEffect = (args: {
  error?: string;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
  isFirstTime?: boolean;
}) => {
  const [isFirstTime, setIsFirstTime] = useIsFirstTimeState(args.isFirstTime);

  return React.useEffect(() => {
    if (args.error && isFirstTime) {
      args.setIsopen(true);
    }
    setIsFirstTime(false);
  }, [args, isFirstTime, setIsFirstTime]);
};
