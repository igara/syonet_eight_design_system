import { SerializedStyles } from '@emotion/react';
import React from 'react';
import * as Styles from './number_area.styles';
import * as Hooks from './number_area.hooks';
import { ArrowLeftIcon, ArrowRightIcon } from 'syonet_eight_design_system';

interface Props {
  inputCSS?: SerializedStyles;
  wrapperCSS?: SerializedStyles;
  defaultValue: number;
  min: number;
  max: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onDownClick?: React.MouseEventHandler<HTMLInputElement>;
  onUpClick?: React.MouseEventHandler<HTMLInputElement>;
}

export const NumberArea: React.FC<Props> = (props) => {
  const [selectValue, setSelectValue] = Hooks.useSelectValueState(props.defaultValue);
  const onClickLeftButtonCallback = Hooks.useOnClickLeftButtonCallback({
    setSelectValue,
    min: props.min,
    selectValue,
  });
  const onClickRightButtonCallback = Hooks.useOnClickRightButtonCallback({
    setSelectValue,
    max: props.max,
    selectValue,
  });

  const wrapperAttributes = {
    css: {
      ...Styles.styles.wrapper(),
      ...props.wrapperCSS,
    },
  };
  const leftButtonAreaAttributes = {
    css: {
      ...Styles.styles.buttonArea(),
    },
    onClick: () => {
      onClickLeftButtonCallback();
    },
  };
  const rightButtonAreaAttributes = {
    css: {
      ...Styles.styles.buttonArea(),
    },
    onClick: () => {
      onClickRightButtonCallback();
    },
  };
  const inputAreaAttributes = {
    css: {
      ...Styles.styles.inputArea(),
    },
  };
  const fontMaxLength = props.max.toString().length;
  const inputAttributes = {
    css: {
      ...Styles.styles.input(),
      ...props.inputCSS,
    },
    type: 'text',
    size: fontMaxLength,
    maxLength: fontMaxLength,
    value: selectValue,
    onChange: props.onChange ? props.onChange : () => {},
    onClick: props.onClick ? props.onClick : () => {},
  };

  const maxAttributes = {
    css: {
      ...Styles.styles.max(),
    },
  };

  return (
    <div {...wrapperAttributes}>
      <span {...leftButtonAreaAttributes}>
        <ArrowLeftIcon />
      </span>
      <div {...inputAreaAttributes}>
        <input {...inputAttributes}></input>
        <div {...maxAttributes}> / {props.max}</div>
      </div>
      <span {...rightButtonAreaAttributes}>
        <ArrowRightIcon />
      </span>
    </div>
  );
};
