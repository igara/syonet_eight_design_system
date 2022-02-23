import { SerializedStyles } from '@emotion/react';
import React from 'react';
import * as Styles from './text.styles';

interface Props {
  type?: 'text';
  inputCSS?: SerializedStyles;
  wrapperCSS?: SerializedStyles;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const Text: React.FC<Props> = (props) => {
  const wrapperAttributes = {
    css: {
      ...Styles.styles.wrapper(),
      ...props.wrapperCSS,
    },
  };
  const inputAttributes = {
    css: {
      ...Styles.styles.input(),
      ...props.inputCSS,
    },
    placeholder: props.placeholder,
    onChange: props.onChange ? props.onChange : () => {},
    onClick: props.onClick ? props.onClick : () => {},
  };

  return (
    <div {...wrapperAttributes}>
      <input type={props.type ? props.type : 'text'} {...inputAttributes}>
        {props.children}
      </input>
    </div>
  );
};
