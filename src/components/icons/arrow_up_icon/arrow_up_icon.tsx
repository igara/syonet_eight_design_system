import React from 'react';
import * as Styles from './arrow_up_icon.styles';
import Icon from './arrow_up_icon.svg';

interface Props {
  size?: Styles.Props['size'];
  color?: Styles.Props['color'];
  backgroundColor?: Styles.Props['backgroundColor'];
  borderColor?: Styles.Props['borderColor'];
}

export const ArrowUpIcon: React.FC<Props> = (props) => {
  return (
    <Icon
      css={Styles.styles.arrowUpIcon({
        size: props.size || 20,
        color: props.color || '#C4C4C4',
        backgroundColor: props.backgroundColor || 'black',
        borderColor: props.borderColor || 'black',
      })}
    />
  );
};
