import { SerializedStyles, css } from '@emotion/react';
import React from 'react';
import * as Styles from './number_area.styles';
import * as Hooks from './number_area.hooks';
import { ArrowLeftIcon, ArrowRightIcon } from '@design_system/src/components/icons';

interface Props {
  inputCSS?: SerializedStyles;
  wrapperCSS?: SerializedStyles;
  defaultValue: number;
  min: number;
  max: number;
  onChange?: (value: number) => void;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const NumberArea: React.FC<Props> = (props) => {
  const inputRef = Hooks.useInputRef();
  const [selectValue, setSelectValue] = Hooks.useSelectValueState(props.defaultValue);
  const onClickLeftButtonCallback = Hooks.useOnClickLeftButtonCallback({
    setSelectValue,
    min: props.min,
    selectValue,
    onChange: props.onChange,
    inputRef,
  });
  const onClickRightButtonCallback = Hooks.useOnClickRightButtonCallback({
    setSelectValue,
    max: props.max,
    selectValue,
    onChange: props.onChange,
    inputRef,
  });
  const onChangeInputCallback = Hooks.useOnChangeInputCallback({
    setSelectValue,
    max: props.max,
    min: props.min,
    onChange: props.onChange,
  });

  const wrapperAttributes = {
    css: css`
      ${Styles.styles.wrapper()}
      ${props.wrapperCSS}
    `,
  };
  const leftButtonAttributes = {
    css: css`
      ${Styles.styles.button()}
    `,
    onClick: () => {
      onClickLeftButtonCallback();
    },
  };
  const rightButtonAttributes = {
    css: css`
      ${Styles.styles.button()}
    `,
    onClick: () => {
      onClickRightButtonCallback();
    },
  };
  const inputAreaAttributes = {
    css: css`
      ${Styles.styles.inputArea()}
    `,
  };
  const fontMaxLength = props.max.toString().length;
  const inputAttributes = {
    css: css`
      ${Styles.styles.input()}
      ${props.inputCSS}
    `,
    type: 'text',
    size: fontMaxLength,
    maxLength: fontMaxLength,
    defaultValue: selectValue,
    onChange: (event: any) => {
      onChangeInputCallback(event);
    },
    onClick: props.onClick ? props.onClick : () => {},
    ref: inputRef,
  };

  const maxAttributes = {
    css: css`
      ${Styles.styles.max()}
    `,
  };

  return (
    <div {...wrapperAttributes}>
      <button {...leftButtonAttributes}>
        <ArrowLeftIcon />
      </button>
      <div {...inputAreaAttributes}>
        <input {...inputAttributes}></input>
        <div {...maxAttributes}> / {props.max}</div>
      </div>
      <button {...rightButtonAttributes}>
        <ArrowRightIcon />
      </button>
    </div>
  );
};
