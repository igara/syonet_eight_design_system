import React from 'react';
export declare const useSelectValueState: (value: number) => [number, React.Dispatch<React.SetStateAction<number>>];
declare type UseOnClickLeftButtonCallbackProps = {
    setSelectValue: React.Dispatch<React.SetStateAction<number>>;
    min: number;
    selectValue: number;
};
export declare const useOnClickLeftButtonCallback: (props: UseOnClickLeftButtonCallbackProps) => () => void;
declare type UseOnClickRightButtonCallbackProps = {
    setSelectValue: React.Dispatch<React.SetStateAction<number>>;
    max: number;
    selectValue: number;
};
export declare const useOnClickRightButtonCallback: (props: UseOnClickRightButtonCallbackProps) => () => void;
export {};
