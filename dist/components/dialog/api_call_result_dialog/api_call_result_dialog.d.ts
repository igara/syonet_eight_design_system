import React from 'react';
import { StandardDialogProps } from '@design_system/src/components';
declare type APICallResultDialogProps = {
    error?: string;
    isFirstTime?: boolean;
    isOpen?: boolean;
} & StandardDialogProps;
export declare const APICallResultDialog: React.FC<APICallResultDialogProps>;
export {};
