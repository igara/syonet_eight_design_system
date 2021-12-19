import React from 'react';
export declare const useIsFirstTimeState: (isFirstTime?: boolean | undefined) => [boolean | undefined, React.Dispatch<React.SetStateAction<boolean | undefined>>];
export declare const useIsOpenState: (isOpen: boolean) => [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export declare const useCloseCallback: (setIsopen: React.Dispatch<React.SetStateAction<boolean>>) => () => void;
export declare const useFirstTimeEffect: (args: {
    error?: string | undefined;
    setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
    isFirstTime?: boolean | undefined;
}) => void;
