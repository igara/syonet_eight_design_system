import React from 'react';
import * as Styles from './select_icon.styles';
import Icon from './select_icon.svg';

interface Props {
  size?: Styles.Props['size'];
  color?: Styles.Props['color'];
  backgroundColor?: Styles.Props['backgroundColor'];
  borderColor?: Styles.Props['borderColor'];
}

export const SelectIcon: React.FC<Props> = (props) => {
  return (
    <Icon
      css={Styles.styles.selectIcon({
        size: props.size || 20,
        color: props.color || '#C4C4C4',
        backgroundColor: props.backgroundColor || 'black',
        borderColor: props.borderColor || 'black',
      })}
    />
  );
};
