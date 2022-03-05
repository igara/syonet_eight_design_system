import React from 'react';
import { SerializedStyles, css } from '@emotion/react';
import * as Hooks from './select.hooks';
import * as Styles from './select.styles';
import { SelectIcon } from '@design_system/src/components/icons';

interface Props {
  items: {
    value: string;
    label: string;
  }[];
  selectCSS?: SerializedStyles;
  dummySelectedValueCSS?: SerializedStyles;
  dummySelectCSS?: SerializedStyles;
  dummyOptionCSS?: SerializedStyles;
  defaultValue?: string;
  onChange?: (event: any) => void;
  onClick?: () => {};
}

export const Select: React.FC<Props> = (props) => {
  const selectRef = Hooks.useSelectRef();
  const [displayDummySelect, setDisplayDummySelect] = Hooks.useDisplayDummySelectState();
  const [selectValue, setSelectValue] = Hooks.useSelectValueState(
    props.defaultValue ? props.defaultValue : props.items[0].value,
  );
  const [selectLabel, setSelectLabel] = Hooks.useSelectLabelState(
    props.items.find((item) => item.value === selectValue)?.label || props.items[0].label,
  );
  const onClickDummySelectedValueCallback = Hooks.useOnClickDummySelectedValueCallback({
    displayDummySelect,
    setDisplayDummySelect,
  });
  const onClickDummyBackgroundCallback = Hooks.useOnClickDummyBackgroundCallback({
    setDisplayDummySelect,
  });
  const onClickDummyOptionCallback = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setDisplayDummySelect(false);

      if (event.currentTarget.dataset.value && selectRef.current) {
        const label = props.items.find(
          (item) => item.value == event.currentTarget.dataset.value,
        )?.label;
        if (label) {
          setSelectValue(event.currentTarget.dataset.value);
          setSelectLabel(label);
          selectRef.current.value = event.currentTarget.dataset.value;
        }
      }
    },
    [setSelectLabel, setSelectValue, setDisplayDummySelect, props.items],
  );

  const wrapperAttributes = {
    css: css`
      ${Styles.styles.wrapper()}
    `,
  };
  const selectAttributes = {
    css: css`
      ${Styles.styles.select()}
      ${props.selectCSS}
    `,
    ref: selectRef,
  };
  const dummyBackgroundAttributes = {
    css: css`
      ${Styles.styles.dummyBackground({
        displayDummySelect,
      })}
    `,
    onClick: () => {
      onClickDummyBackgroundCallback();
    },
  };
  const dummySelectedValueAttributes = {
    css: css`
      ${Styles.styles.dummySelectedValue()}
      ${props.dummySelectedValueCSS}
    `,
    onClick: () => {
      onClickDummySelectedValueCallback();
      props.onClick && props.onClick();
    },
  };
  const dummySelectAttributes = {
    css: css`
      ${Styles.styles.dummySelect({
        displayDummySelect,
      })}
      ${props.dummySelectCSS}
    `,
  };
  const dummyOptionAttributes = {
    css: css`
      ${Styles.styles.dummyOption()}
      ${props.dummyOptionCSS}
    `,
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      onClickDummyOptionCallback(event);
      props.onChange && props.onChange(event);
    },
  };

  return (
    <div {...wrapperAttributes}>
      <select {...selectAttributes}>
        {props.items.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>

      <div {...dummyBackgroundAttributes} />

      <div {...dummySelectedValueAttributes}>
        <label>{selectLabel}</label>
        <SelectIcon></SelectIcon>
      </div>

      <div {...dummySelectAttributes}>
        {props.items.map((item) => {
          return (
            <div key={item.value} {...dummyOptionAttributes} data-value={item.value}>
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};
