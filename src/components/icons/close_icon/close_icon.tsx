import React from 'react';
import * as Styles from './close_icon.styles';
import Icon from './close_icon.svg';

interface Props {
  size?: Styles.Props['size'];
  color?: Styles.Props['color'];
  backgroundColor?: Styles.Props['backgroundColor'];
  borderColor?: Styles.Props['borderColor'];
}

export const CloseIcon: React.FC<Props> = (props) => {
  return (
    <Icon
      css={Styles.styles.closeIcon({
        size: props.size || 20,
        color: props.color || '#C4C4C4',
        backgroundColor: props.backgroundColor || 'black',
        borderColor: props.borderColor || 'black',
      })}
    />
  );
};
