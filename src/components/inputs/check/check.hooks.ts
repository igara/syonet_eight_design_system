import React from 'react';

export const useInputRef = () => {
  return React.useRef<HTMLInputElement | null>(null);
};

export const useCheckedState = (flag: boolean) => {
  return React.useState(flag);
};

type UseOnClickButtonCallbackProps = {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  value: string;
  onClick?: (checked: boolean, value: string) => void;
};
export const useOnClickButtonCallback = (props: UseOnClickButtonCallbackProps) => {
  return React.useCallback(() => {
    const checked = !props.checked;
    props.setChecked(checked);

    if (props.inputRef && props.inputRef.current) {
      props.inputRef.current.checked = checked;
    }

    props.onClick && props.onClick(checked, props.value);
  }, [props]);
};
