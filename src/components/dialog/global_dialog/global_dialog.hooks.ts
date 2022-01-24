import React from 'react';
import { atom, useRecoilState, useRecoilCallback, SetterOrUpdater } from 'recoil';

type GlobalDialogState = {
  uid: string;
  isOpen: boolean;
}[];

type GlobalDialogNextNumberState = number;

export const globalDialogStateAtom = atom<GlobalDialogState>({
  key: 'SYONET_EIGHT_DESIGN_SYSTEM_GLOBAL_DIALOG',
  default: [],
  dangerouslyAllowMutability: true,
});

export const globalDialogNextNumberStateAtom = atom<GlobalDialogNextNumberState>({
  key: 'SYONET_EIGHT_DESIGN_SYSTEM_GLOBAL_DIALOG_NEXT_NUMBER',
  default: 0,
});

export const useGlobalDialogState = () => {
  return useRecoilState(globalDialogStateAtom);
};

export const useGlobalDialogNextNumberState = () => {
  return useRecoilState(globalDialogNextNumberStateAtom);
};

export const useAddGlobalDialogStateEffect = (args: {
  uid: string;
  globalDialogState: GlobalDialogState;
  setGlobalDialogState: SetterOrUpdater<GlobalDialogState>;
}) => {
  return React.useEffect(() => {
    const index = args.globalDialogState.findIndex((s) => {
      return s.uid === args.uid;
    });

    if (index === -1) {
      args.setGlobalDialogState([
        ...args.globalDialogState,
        {
          uid: args.uid,
          isOpen: true,
        },
      ]);
    }
  }, [args]);
};

export const useOnCloseCallback = (args: {
  uid: string;
  globalDialogState: GlobalDialogState;
  setGlobalDialogState: SetterOrUpdater<GlobalDialogState>;
  setGlobalDialogNextNumberState: SetterOrUpdater<GlobalDialogNextNumberState>;
}) => {
  return useRecoilCallback(
    () => () => {
      args.setGlobalDialogState(
        args.globalDialogState.reduce((currVal: GlobalDialogState, s, i) => {
          if (s.uid === args.uid) {
            s.isOpen = false;
            args.setGlobalDialogNextNumberState(i + 1);
          }
          currVal.push(s);
          return currVal;
        }, []),
      );
    },
    [args],
  );
};
