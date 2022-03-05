import React from 'react';
export declare const useSelectRef: () => React.MutableRefObject<HTMLSelectElement | null>;
export declare const useDisplayDummySelectState: () => [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export declare const useSelectValueState: (value: string) => [string, React.Dispatch<React.SetStateAction<string>>];
export declare const useSelectLabelState: (value: string) => [string, React.Dispatch<React.SetStateAction<string>>];
declare type UseOnClickDummySelectedValueCallbackProps = {
    displayDummySelect: boolean;
    setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useOnClickDummySelectedValueCallback: (props: UseOnClickDummySelectedValueCallbackProps) => () => void;
declare type UseOnClickDummyBackgroundCallback = {
    setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useOnClickDummyBackgroundCallback: (props: UseOnClickDummyBackgroundCallback) => () => void;
declare type UseOnClickDummyOptionCallback = {
    setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectValue: React.Dispatch<React.SetStateAction<string>>;
    setSelectLabel: React.Dispatch<React.SetStateAction<string>>;
    selectRef: React.MutableRefObject<HTMLSelectElement>;
    items: {
        value: string;
        label: string;
    }[];
};
export declare const useOnClickDummyOptionCallback: (props: UseOnClickDummyOptionCallback) => (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
export {};
