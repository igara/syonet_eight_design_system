import React from 'react';
import * as Styles from './check.styles';
import * as Hooks from './check.hooks';
import { SerializedStyles, css } from '@emotion/react';
import { CheckIcon } from '@design_system/src/components/icons';

interface Props {
  css?: SerializedStyles;
  defaultChecked: boolean;
}

export const Check: React.FC<Props> = (props) => {
  const inputRef = Hooks.useInputRef();
  const [checked, setChecked] = Hooks.useCheckedState(props.defaultChecked);
  const onClickButtonCallback = Hooks.useOnClickButtonCallback({
    checked,
    setChecked,
    inputRef,
  });

  const buttonAttributes = {
    css: css`
      ${Styles.styles.button()}
      ${props.css}
    `,
    onClick: () => {
      onClickButtonCallback();
    },
  };
  const checkIconAttributes = {
    iconCSS: css`
      ${Styles.styles.checkdIcon(checked)}
    `,
  };
  const inputAttributes = {
    css: css`
      ${Styles.styles.input()}
    `,
    ref: inputRef,
    type: 'checkbox',
    defaultChecked: checked,
  };
  const childrenAttributes = {
    css: css`
      ${Styles.styles.children()}
    `,
  };
  return (
    <button {...buttonAttributes}>
      <CheckIcon {...checkIconAttributes} />
      <input {...inputAttributes} />
      <div {...childrenAttributes}>{props.children}</div>
    </button>
  );
};
