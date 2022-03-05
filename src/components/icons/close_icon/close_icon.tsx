import React from 'react';
import * as Styles from './close_icon.styles';
import Icon from './close_icon.svg';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  iconCSS?: SerializedStyles;
}

export const CloseIcon: React.FC<Props> = (props) => {
  const attributes = {
    css: css`
      ${Styles.styles.icon()}
      ${props.iconCSS}
    `,
  };
  return <Icon {...attributes} />;
};
