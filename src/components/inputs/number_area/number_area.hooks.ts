import React from 'react';

export const useInputRef = () => {
  return React.useRef<HTMLInputElement | null>(null);
};

export const useSelectValueState = (value: number) => {
  return React.useState(value);
};

type UseOnClickLeftButtonCallbackProps = {
  setSelectValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  selectValue: number;
  onChange?: (value: number) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

export const useOnClickLeftButtonCallback = (
  props: UseOnClickLeftButtonCallbackProps,
) => {
  return React.useCallback(() => {
    if (props.min < props.selectValue) {
      const value = Number(props.selectValue - 1);
      props.setSelectValue(value);
      if (props.inputRef.current) {
        props.inputRef.current.value = value.toString();
      }
      props.onChange && props.onChange(value);
    }
  }, [props]);
};

type UseOnClickRightButtonCallbackProps = {
  setSelectValue: React.Dispatch<React.SetStateAction<number>>;
  max: number;
  selectValue: number;
  onChange?: (value: number) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

export const useOnClickRightButtonCallback = (
  props: UseOnClickRightButtonCallbackProps,
) => {
  return React.useCallback(() => {
    if (props.selectValue < props.max) {
      const value = Number(props.selectValue + 1);
      props.setSelectValue(value);
      if (props.inputRef.current) {
        props.inputRef.current.value = value.toString();
      }
      props.onChange && props.onChange(value);
    }
  }, [props]);
};

type UseOnChangeInputCallbackProps = {
  setSelectValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
  onChange?: (value: number) => void;
};

export const useOnChangeInputCallback = (props: UseOnChangeInputCallbackProps) => {
  return React.useCallback(
    (event: any) => {
      const value = Number(event.target.value);
      if (props.min <= value && value <= props.max) {
        props.setSelectValue(value);
        props.onChange && props.onChange(value);
      }
    },
    [props],
  );
};
