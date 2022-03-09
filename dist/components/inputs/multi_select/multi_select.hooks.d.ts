import React from 'react';
export declare const useSelectRef: () => React.MutableRefObject<HTMLSelectElement | null>;
export declare const useDisplayDummySelectState: (flag: boolean) => [boolean, React.Dispatch<React.SetStateAction<boolean>>];
export declare const useSelectedKeyValueState: (keyValue: {
    [value: string]: boolean;
}) => [{
    [value: string]: boolean;
}, React.Dispatch<React.SetStateAction<{
    [value: string]: boolean;
}>>];
declare type UseOnClickDummyBackgroundCallback = {
    setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useOnClickDummyBackgroundCallback: (props: UseOnClickDummyBackgroundCallback) => () => void;
declare type UseOnClickDummySelectedValueCallbackProps = {
    displayDummySelect: boolean;
    setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useOnClickDummySelectedValueCallback: (props: UseOnClickDummySelectedValueCallbackProps) => () => void;
export {};
