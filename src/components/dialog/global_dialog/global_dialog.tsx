import React from 'react';
import {
  useAddGlobalDialogStateEffect,
  useOnCloseCallback,
  useGlobalDialogState,
  useGlobalDialogNextNumberState,
} from './global_dialog.hooks';
import { StandardDialog, StandardDialogProps } from '../';

type Props = {
  uid: string;
} & Partial<StandardDialogProps>;

export const GlobalDialog: React.FC<Props> = (props) => {
  const [globalDialogState, setGlobalDialogState] = useGlobalDialogState();
  const [globalDialogNextNumberState, setGlobalDialogNextNumberState] =
    useGlobalDialogNextNumberState();

  useAddGlobalDialogStateEffect({
    uid: props.uid,
    globalDialogState,
    setGlobalDialogState,
  });

  const stateIndex = globalDialogState.findIndex((s) => {
    return s.isOpen === true && s.uid === props.uid;
  });

  const onCloseCallback = useOnCloseCallback({
    uid: props.uid,
    globalDialogState,
    setGlobalDialogState,
    setGlobalDialogNextNumberState,
    onClose: props.onClose,
  });

  return stateIndex === globalDialogNextNumberState ? (
    <StandardDialog {...props} isOpen={true} onClose={onCloseCallback}>
      {props.children}
    </StandardDialog>
  ) : null;
};
