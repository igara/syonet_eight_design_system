import React from 'react';
import * as Styles from './multi_select.styles';
import * as Hooks from './multi_select.hooks';
import { SerializedStyles, css } from '@emotion/react';
import { SelectIcon, CheckIcon } from '@design_system/src/components/icons';

type Item = {
  value: string;
  label: string;
  selected: boolean;
  onClick: (checked: boolean, value: string) => void;
};

interface Props {
  items: Item[];
  wrapperCSS?: SerializedStyles;
  selectCSS?: SerializedStyles;
  dummySelectedValueCSS?: SerializedStyles;
  dummySelectCSS?: SerializedStyles;
  dummyOptionCSS?: SerializedStyles;
  selectName: string;
  onDisable?: () => void;
  isDisplay: boolean;
}

export const MultiSelect: React.FC<Props> = (props) => {
  const selectRef = Hooks.useSelectRef();
  const [displayDummySelect, setDisplayDummySelect] = Hooks.useDisplayDummySelectState(
    props.isDisplay,
  );
  const [selectedKeyValue, setSelectedKeyValue] = Hooks.useSelectedKeyValueState(
    props.items.reduce((curry, item) => {
      const value = {
        ...curry,
        ...{
          [item.value]: item.selected,
        },
      };

      return value;
    }, {}),
  );

  const onClickDummyBackgroundCallback = Hooks.useOnClickDummyBackgroundCallback({
    setDisplayDummySelect,
  });
  const onClickDummySelectedValueCallback = Hooks.useOnClickDummySelectedValueCallback({
    displayDummySelect,
    setDisplayDummySelect,
  });

  const wrapperAttributes = {
    css: css`
      ${Styles.styles.wrapper()}
      ${props.wrapperCSS}
    `,
  };
  const selectAttributes = {
    css: css`
      ${Styles.styles.select()}
      ${props.selectCSS}
    `,
    ref: selectRef,
    multiple: true,
    defaultValue: props.items.reduce((curry: string[], item) => {
      if (item.selected) curry.push(item.value);

      return curry;
    }, []),
  };
  const dummyBackgroundAttributes = {
    css: css`
      ${Styles.styles.dummyBackground({
        displayDummySelect,
      })}
    `,
    onClick: () => {
      onClickDummyBackgroundCallback();
      props.onDisable && props.onDisable();
    },
  };
  const dummySelectedValueAttributes = {
    css: css`
      ${Styles.styles.dummySelectedValue()}
      ${props.dummySelectedValueCSS}
    `,
    onClick: () => {
      onClickDummySelectedValueCallback();
      props.onDisable && props.onDisable();
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
  const dummyOptionAttributes = (item: Item) => {
    return {
      css: css`
        ${Styles.styles.dummyOption()}
        ${props.dummyOptionCSS}
      `,
      onClick: () => {
        onClickDummyOptionCallback(item);
        item.onClick && item.onClick(!item.selected, item.value);
      },
    };
  };
  const checkIconAttributes = (item: Item) => {
    const checked = selectedKeyValue[item.value];

    return {
      iconCSS: css`
        ${Styles.styles.checkdIcon(checked)}
      `,
    };
  };

  const onClickDummyOptionCallback = React.useCallback(
    (item: Item) => {
      if (selectRef.current) {
        const keyValue = {
          ...selectedKeyValue,
          ...{
            [item.value]: !selectedKeyValue[item.value],
          },
        };
        setSelectedKeyValue(keyValue);

        Array.from(selectRef.current).forEach((option) => {
          if (!(option instanceof HTMLOptionElement)) return;

          if (option.value === item.value) option.selected = !option.selected;
        });
      }
    },
    [setSelectedKeyValue, selectedKeyValue, selectRef, props.items],
  );

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
        <label>{props.selectName}</label>
        <SelectIcon></SelectIcon>
      </div>

      <div {...dummySelectAttributes}>
        {props.items.map((item) => {
          return (
            <div key={item.value} {...dummyOptionAttributes(item)}>
              <CheckIcon {...checkIconAttributes(item)} />
              <label>{item.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
