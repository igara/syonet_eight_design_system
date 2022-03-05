import React from 'react';
export declare const useInputRef: () => React.MutableRefObject<HTMLInputElement | null>;
export declare const useSelectValueState: (value: number) => [number, React.Dispatch<React.SetStateAction<number>>];
declare type UseOnClickLeftButtonCallbackProps = {
    setSelectValue: React.Dispatch<React.SetStateAction<number>>;
    min: number;
    selectValue: number;
    onChange?: (value: number) => void;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
};
export declare const useOnClickLeftButtonCallback: (props: UseOnClickLeftButtonCallbackProps) => () => void;
declare type UseOnClickRightButtonCallbackProps = {
    setSelectValue: React.Dispatch<React.SetStateAction<number>>;
    max: number;
    selectValue: number;
    onChange?: (value: number) => void;
    inputRef: React.MutableRefObject<HTMLInputElement | null>;
};
export declare const useOnClickRightButtonCallback: (props: UseOnClickRightButtonCallbackProps) => () => void;
declare type UseOnChangeInputCallbackProps = {
    setSelectValue: React.Dispatch<React.SetStateAction<number>>;
    min: number;
    max: number;
    onChange?: (value: number) => void;
};
export declare const useOnChangeInputCallback: (props: UseOnChangeInputCallbackProps) => (event: any) => void;
export {};
