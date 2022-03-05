import React from 'react';
import { SerializedStyles } from '@emotion/react';
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
  const selectRef = React.useRef<HTMLSelectElement | null>(null);
  const [displayDimmySelect, setDisplayDimmySelect] = React.useState(false);
  const [selectValue, setSelectValue] = React.useState(
    props.defaultValue ? props.defaultValue : props.items[0].value,
  );
  const [selectLabel, setSelectLabel] = React.useState(
    props.items.find((item) => item.value === selectValue)?.label || props.items[0].label,
  );
  const onClickDummySelectedValueCallback = React.useCallback(() => {
    setDisplayDimmySelect(!displayDimmySelect);
  }, [setDisplayDimmySelect, displayDimmySelect]);
  const onClickDummyBackgroundCallback = React.useCallback(() => {
    setDisplayDimmySelect(false);
  }, [setDisplayDimmySelect]);
  const onClickDummyOptionCallback = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setDisplayDimmySelect(false);

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
    [setSelectLabel, setSelectValue, setDisplayDimmySelect, props.items],
  );

  const wrapperAttributes = {
    css: {
      ...Styles.styles.wrapper(),
    },
  };
  const selectAttributes = {
    css: {
      ...Styles.styles.select(),
      ...props.selectCSS,
    },
    ref: selectRef,
  };
  const dummyBackgroundAttributes = {
    css: {
      ...Styles.styles.dummyBackground({
        displayDimmySelect,
      }),
    },
    onClick: () => {
      onClickDummyBackgroundCallback();
    },
  };
  const dummySelectedValueAttributes = {
    css: {
      ...Styles.styles.dummySelectedValue(),
      ...props.dummySelectedValueCSS,
    },
    onClick: () => {
      onClickDummySelectedValueCallback();
      props.onClick && props.onClick();
    },
  };
  const dummySelectAttributes = {
    css: {
      ...Styles.styles.dummySelect({
        displayDimmySelect,
      }),
      ...props.dummySelectCSS,
    },
  };
  const dummyOptionAttributes = {
    css: {
      ...Styles.styles.dummyOption(),
      ...props.dummyOptionCSS,
    },
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