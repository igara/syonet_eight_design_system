import { SetterOrUpdater } from 'recoil';
declare type GlobalDialogState = {
    uid: string;
    isOpen: boolean;
}[];
declare type GlobalDialogNextNumberState = number;
export declare const globalDialogStateAtom: import("recoil").RecoilState<GlobalDialogState>;
export declare const globalDialogNextNumberStateAtom: import("recoil").RecoilState<number>;
export declare const useGlobalDialogState: () => [GlobalDialogState, SetterOrUpdater<GlobalDialogState>];
export declare const useGlobalDialogNextNumberState: () => [number, SetterOrUpdater<number>];
export declare const useAddGlobalDialogStateEffect: (args: {
    uid: string;
    globalDialogState: GlobalDialogState;
    setGlobalDialogState: SetterOrUpdater<GlobalDialogState>;
}) => void;
export declare const useOnCloseCallback: (args: {
    uid: string;
    globalDialogState: GlobalDialogState;
    setGlobalDialogState: SetterOrUpdater<GlobalDialogState>;
    setGlobalDialogNextNumberState: SetterOrUpdater<GlobalDialogNextNumberState>;
}) => () => void;
export {};
