import { SerializedStyles } from '@emotion/react';
import React from 'react';
import * as Styles from './text.styles';

interface Props {
  type?: 'text' | 'search';
  inputCSS?: SerializedStyles;
  wrapperCSS?: SerializedStyles;
  placeholder: string;
  readOnly?: boolean;
  defaultValue?: string;
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
    type: props.type ? props.type : 'text',
    placeholder: props.placeholder,
    readOnly: props.readOnly ? props.readOnly : false,
    defaultValue: props.defaultValue ? props.defaultValue : '',
    onChange: props.onChange ? props.onChange : () => {},
    onClick: props.onClick ? props.onClick : () => {},
  };

  return (
    <div {...wrapperAttributes}>
      <input {...inputAttributes}>{props.children}</input>
    </div>
  );
};
