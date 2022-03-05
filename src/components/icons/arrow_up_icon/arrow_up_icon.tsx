import React from 'react';
import * as Styles from './arrow_up_icon.styles';
import Icon from './arrow_up_icon.svg';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  iconCSS?: SerializedStyles;
}

export const ArrowUpIcon: React.FC<Props> = (props) => {
  const attributes = {
    css: css`
      ${Styles.styles.icon()}
      ${props.iconCSS}
    `,
  };
  return <Icon {...attributes} />;
};
