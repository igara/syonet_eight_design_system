import React from 'react';
import { SerializedStyles } from '@emotion/react';
declare type Item = {
    value: string;
    label: string;
    selected: boolean;
    onClick: (checked: boolean, value: string) => void;
};
interface Props {
    items: Item[];
    wrapperCSS?: SerializedStyles;
    selectCSS?: SerializedStyles;
    dummySelectedValueCSS?: SerializedStyles;
    dummySelectCSS?: SerializedStyles;
    dummyOptionCSS?: SerializedStyles;
    selectName: string;
    onDisable?: () => void;
    isDisplay: boolean;
}
export declare const MultiSelect: React.FC<Props>;
export {};
