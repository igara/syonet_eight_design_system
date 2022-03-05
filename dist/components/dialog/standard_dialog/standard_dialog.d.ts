import React from 'react';
import { SerializedStyles } from '@emotion/react';
export interface StandardDialogProps {
    isOpen: boolean;
    onClose: () => void;
    dialogCSS?: SerializedStyles;
    contentCSS?: SerializedStyles;
}
export declare const StandardDialog: React.FC<StandardDialogProps>;
