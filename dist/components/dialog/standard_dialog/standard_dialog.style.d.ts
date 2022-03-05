declare type StandardDialogStyleProps = {
    isOpen: boolean;
};
export declare const styles: {
    dialog: (props: StandardDialogStyleProps) => import("@emotion/react").SerializedStyles;
    content: () => import("@emotion/react").SerializedStyles;
    close: () => import("@emotion/react").SerializedStyles;
    children: () => import("@emotion/react").SerializedStyles;
    scroll: (isOpen: boolean) => import("@emotion/react").SerializedStyles;
};
export {};
