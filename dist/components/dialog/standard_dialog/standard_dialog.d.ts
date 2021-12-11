import React from 'react';
import * as Styels from './standard_dialog.style';
export interface StandardDialogProps {
    isOpen: boolean;
    onClose: () => void;
    content?: {
        width?: Styels.ContentStyleProps['width'];
        height?: Styels.ContentStyleProps['height'];
    };
}
export declare const StandardDialog: React.FC<StandardDialogProps>;
