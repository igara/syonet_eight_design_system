import React from 'react';
import * as Styles from './arrow_down_icon.styles';
import Icon from './arrow_down_icon.svg';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  iconCSS?: SerializedStyles;
}

export const ArrowDownIcon: React.FC<Props> = (props) => {
  const attributes = {
    css: css`
      ${Styles.styles.icon()}
      ${props.iconCSS}
    `,
  };
  return <Icon {...attributes} />;
};
