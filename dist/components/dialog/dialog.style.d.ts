import * as CSS from 'csstype';
export declare type ContentStyleProps = {
    width: CSS.Property.Width;
    height: CSS.Property.Height;
};
export declare const styles: {
    dialog: () => import("@emotion/react").SerializedStyles;
    content: (props: ContentStyleProps) => import("@emotion/react").SerializedStyles;
    closeButton: () => import("@emotion/react").SerializedStyles;
};
