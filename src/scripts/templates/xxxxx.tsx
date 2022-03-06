import React from 'react';
import * as Styles from './xxxxx.styles';
import { SerializedStyles, css } from '@emotion/react';

interface Props {
  css?: SerializedStyles;
}

export const XXXXX: React.FC<Props> = (props) => {
  const attributes = {
    css: css`
      ${Styles.styles.xxxxx()}
      ${props.css}
    `,
  };
  return <div {...attributes}></div>;
};
