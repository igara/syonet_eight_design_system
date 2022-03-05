import React from 'react';

export const useSelectRef = () => {
  return React.useRef<HTMLSelectElement | null>(null);
};

export const useDisplayDummySelectState = () => {
  return React.useState(false);
};

export const useSelectValueState = (value: string) => {
  return React.useState(value);
};

export const useSelectLabelState = (value: string) => {
  return React.useState(value);
};

type UseOnClickDummySelectedValueCallbackProps = {
  displayDummySelect: boolean;
  setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useOnClickDummySelectedValueCallback = (
  props: UseOnClickDummySelectedValueCallbackProps,
) => {
  return React.useCallback(() => {
    props.setDisplayDummySelect(!props.displayDummySelect);
  }, [props]);
};

type UseOnClickDummyBackgroundCallback = {
  setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useOnClickDummyBackgroundCallback = (
  props: UseOnClickDummyBackgroundCallback,
) => {
  return React.useCallback(() => {
    props.setDisplayDummySelect(false);
  }, [props]);
};

type UseOnClickDummyOptionCallback = {
  setDisplayDummySelect: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectLabel: React.Dispatch<React.SetStateAction<string>>;
  selectRef: React.MutableRefObject<HTMLSelectElement>;
  items: {
    value: string;
    label: string;
  }[];
};

export const useOnClickDummyOptionCallback = (props: UseOnClickDummyOptionCallback) => {
  return React.useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      props.setDisplayDummySelect(false);

      if (event.currentTarget.dataset.value && props.selectRef.current) {
        const label = props.items.find(
          (item) => item.value == event.currentTarget.dataset.value,
        )?.label;
        if (label) {
          props.setSelectValue(event.currentTarget.dataset.value);
          props.setSelectLabel(label);
          props.selectRef.current.value = event.currentTarget.dataset.value;
        }
      }
    },
    [props],
  );
};
