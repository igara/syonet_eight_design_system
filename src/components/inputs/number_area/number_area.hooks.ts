import React from 'react';

export const useSelectValueState = (value: number) => {
  return React.useState(value);
};

type UseOnClickLeftButtonCallbackProps = {
  setSelectValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  selectValue: number;
};

export const useOnClickLeftButtonCallback = (
  props: UseOnClickLeftButtonCallbackProps,
) => {
  return React.useCallback(() => {
    if (props.min < props.selectValue) {
      props.setSelectValue(props.selectValue - 1);
    }
  }, [props]);
};

type UseOnClickRightButtonCallbackProps = {
  setSelectValue: React.Dispatch<React.SetStateAction<number>>;
  max: number;
  selectValue: number;
};

export const useOnClickRightButtonCallback = (
  props: UseOnClickRightButtonCallbackProps,
) => {
  return React.useCallback(() => {
    if (props.selectValue < props.max) {
      props.setSelectValue(props.selectValue + 1);
    }
  }, [props]);
};
