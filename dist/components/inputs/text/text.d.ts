import { SerializedStyles } from '@emotion/react';
import React from 'react';
interface Props {
    type?: 'text' | 'search';
    inputCSS?: SerializedStyles;
    wrapperCSS?: SerializedStyles;
    placeholder: string;
    readOnly?: boolean;
    defaultValue?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
}
export declare const Text: React.FC<Props>;
export {};
