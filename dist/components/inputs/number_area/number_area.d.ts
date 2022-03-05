import { SerializedStyles } from '@emotion/react';
import React from 'react';
interface Props {
    inputCSS?: SerializedStyles;
    wrapperCSS?: SerializedStyles;
    defaultValue: number;
    min: number;
    max: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    onDownClick?: React.MouseEventHandler<HTMLInputElement>;
    onUpClick?: React.MouseEventHandler<HTMLInputElement>;
}
export declare const NumberArea: React.FC<Props>;
export {};
