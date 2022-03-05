import { css } from '@emotion/react';

export const styles = {
  wrapper: () => css`
    padding: 4px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 4px;
  `,
  buttonArea: () => css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  inputArea: () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  input: () => css`
    height: 100%;
    padding: 0 4px;
    outline: none;
    background: transparent;
    font-size: 16px;
    text-align: center;
    border: 1px solid black;
    border-radius: 4px;

    -moz-appearance: textfield;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  `,
  max: () => css`
    padding-left: 4px;
    user-select: none;
  `,
};
