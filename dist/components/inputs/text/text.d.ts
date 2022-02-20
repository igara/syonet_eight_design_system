import { SerializedStyles } from '@emotion/react';
import React from 'react';
interface Props {
    type?: 'text';
    inputCSS?: SerializedStyles;
    wrapperCSS?: SerializedStyles;
    placeholder: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
}
export declare const Text: React.FC<Props>;
export {};
