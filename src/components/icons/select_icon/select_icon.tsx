import React from 'react';
import * as Styles from './select_icon.styles';
import Icon from './select_icon.svg';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  iconCSS?: SerializedStyles;
}

export const SelectIcon: React.FC<Props> = (props) => {
  const attributes = {
    css: css`
      ${Styles.styles.icon()}
      ${props.iconCSS}
    `,
  };
  return <Icon {...attributes} />;
};
