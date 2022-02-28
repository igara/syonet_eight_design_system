import React from 'react';
import { SerializedStyles } from '@emotion/react';
interface Props {
    items: {
        value: string;
        label: string;
    }[];
    selectCSS?: SerializedStyles;
    dummySelectedValueCSS?: SerializedStyles;
    dummySelectCSS?: SerializedStyles;
    dummyOptionCSS?: SerializedStyles;
    defaultValue?: string;
    onChange?: (event: any) => void;
    onClick?: () => {};
}
export declare const Select: React.FC<Props>;
export {};
