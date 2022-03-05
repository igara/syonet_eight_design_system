import React from 'react';
import * as Styles from './menu_icon.styles';
import Icon from './menu_icon.svg';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  iconCSS?: SerializedStyles;
}

export const MenuIcon: React.FC<Props> = (props) => {
  const attributes = {
    css: css`
      ${Styles.styles.icon()}
      ${props.iconCSS}
    `,
  };
  return <Icon {...attributes} />;
};
