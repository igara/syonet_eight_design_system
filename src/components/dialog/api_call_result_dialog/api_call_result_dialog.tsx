import React from 'react';
import { StandardDialog, StandardDialogProps } from '@design_system/src/components';
import {
  useIsOpenState,
  useCloseCallback,
  useFirstTimeEffect,
} from './api_call_result_dialog.hooks';

type APICallResultDialogProps = {
  error?: string;
  isFirstTime?: boolean;
  isOpen?: boolean;
} & StandardDialogProps;

export const APICallResultDialog: React.FC<APICallResultDialogProps> = (props) => {
  const [isOpen, setIsopen] = useIsOpenState(props.isOpen);
  useFirstTimeEffect({ error: props.error, setIsopen, isFirstTime: props.isFirstTime });

  return (
    <StandardDialog {...props} isOpen={isOpen} onClose={useCloseCallback(setIsopen)}>
      <label>
        システムエラー:
        <br />
        <textarea readOnly={true} value={props.error} />
      </label>
    </StandardDialog>
  );
};

APICallResultDialog.defaultProps = {
  isOpen: false,
  isFirstTime: true,
};
