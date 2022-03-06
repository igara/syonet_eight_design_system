import React from 'react';
import { SerializedStyles } from '@emotion/react';
interface Props {
    css?: SerializedStyles;
    defaultChecked: boolean;
    onClick?: (checked: boolean, value: string) => void;
    value: string;
}
export declare const Check: React.FC<Props>;
export {};
