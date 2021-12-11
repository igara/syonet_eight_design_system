import React from 'react';
import * as Styels from './menu_icon.styles';
import Icon from './menu_icon.svg';

interface Props {
  size?: Styels.Props['size'];
  color?: Styels.Props['color'];
  backgroundColor?: Styels.Props['backgroundColor'];
  borderColor?: Styels.Props['borderColor'];
}

export const MenuIcon: React.FC<Props> = (props) => {
  return (
    <Icon
      css={Styels.styles.menuIcon({
        size: props.size || 20,
        color: props.color || '#C4C4C4',
        backgroundColor: props.backgroundColor || 'black',
        borderColor: props.borderColor || 'black',
      })}
    />
  );
};
