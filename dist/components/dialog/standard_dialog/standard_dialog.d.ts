import React from 'react';
import * as Styles from './standard_dialog.style';
export interface StandardDialogProps {
    isOpen: boolean;
    onClose: () => void;
    content?: {
        width?: Styles.ContentStyleProps['width'];
        height?: Styles.ContentStyleProps['height'];
    };
}
export declare const StandardDialog: React.FC<StandardDialogProps>;
