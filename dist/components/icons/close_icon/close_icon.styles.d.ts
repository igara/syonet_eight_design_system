import * as CSS from 'csstype';
export interface Props {
    size: number;
    color: CSS.Property.Fill;
    backgroundColor: CSS.Property.Fill;
    borderColor: CSS.Property.Stroke;
}
export declare const styles: {
    closeIcon: (props: Props) => import("@emotion/react").SerializedStyles;
};
