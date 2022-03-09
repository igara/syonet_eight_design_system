import React from 'react';

export const useSelectRef = () => {
  return React.useRef<HTMLSelectElement | null>(null);
};

export const useDisplayDummySelectState = (flag: boolean) => {
  return React.useState(flag);
};

export const useSelectedKeyValueState = (keyValue: { [value: string]: boolean }) => {
  return React.useState(keyValue);
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
