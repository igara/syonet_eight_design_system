import React from 'react';
export declare const useInputRef: () => React.MutableRefObject<HTMLInputElement | null>;
export declare const useCheckedState: (flag: boolean) => [boolean, React.Dispatch<React.SetStateAction<boolean>>];
declare type UseOnClickButtonCallbackProps = {
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
    checked: boolean;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
};
export declare const useOnClickButtonCallback: (props: UseOnClickButtonCallbackProps) => () => void;
export {};
