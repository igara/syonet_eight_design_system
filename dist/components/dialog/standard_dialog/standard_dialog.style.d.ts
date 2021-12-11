import * as CSS from 'csstype';
export declare type StandardDialogStyleProps = {
    isOpen: boolean;
};
export declare type ContentStyleProps = {
    width: CSS.Property.Width;
    height: CSS.Property.Height;
};
export declare const styles: {
    dialog: (props: StandardDialogStyleProps) => import("@emotion/react").SerializedStyles;
    content: (props: ContentStyleProps) => import("@emotion/react").SerializedStyles;
    close: () => import("@emotion/react").SerializedStyles;
};
