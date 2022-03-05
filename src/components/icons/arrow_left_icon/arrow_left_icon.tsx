import React from 'react';
import * as Styles from './arrow_left_icon.styles';
import Icon from './arrow_left_icon.svg';

interface Props {
  size?: Styles.Props['size'];
  color?: Styles.Props['color'];
  backgroundColor?: Styles.Props['backgroundColor'];
  borderColor?: Styles.Props['borderColor'];
}

export const ArrowLeftIcon: React.FC<Props> = (props) => {
  return (
    <Icon
      css={Styles.styles.arrowLeftIcon({
        size: props.size || 20,
        color: props.color || '#C4C4C4',
        backgroundColor: props.backgroundColor || 'black',
        borderColor: props.borderColor || 'black',
      })}
    />
  );
};
