import React from 'react';
import * as Styels from './dialog.style';
declare type Props = {
    isOpen: boolean;
    onCloseButton: () => void;
    content?: {
        width?: Styels.ContentStyleProps['width'];
        height?: Styels.ContentStyleProps['height'];
    };
};
export declare const Dialog: React.FC<Props>;
export {};
