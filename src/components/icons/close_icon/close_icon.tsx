import React from 'react';
import * as Styels from './close_icon.styles';
import Icon from './close_icon.svg';

export interface Props {
  size?: Styels.Props['size'];
  color?: Styels.Props['color'];
  backgroundColor?: Styels.Props['backgroundColor'];
  borderColor?: Styels.Props['borderColor'];
}

export const CloseIcon: React.FC<Props> = (props) => {
  return (
    <Icon
      css={Styels.styles.closeIcon({
        size: props.size || 20,
        color: props.color || '#C4C4C4',
        backgroundColor: props.backgroundColor || 'black',
        borderColor: props.borderColor || 'black',
      })}
    />
  );
};
