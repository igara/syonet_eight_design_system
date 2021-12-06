import React from 'react';
import * as Styels from './close_icon.styles';
export interface Props {
    size?: Styels.Props['size'];
    color?: Styels.Props['color'];
    backgroundColor?: Styels.Props['backgroundColor'];
    borderColor?: Styels.Props['borderColor'];
}
export declare const CloseIcon: React.FC<Props>;
