import { css } from '@emotion/react';

export const styles = {
  button: () => css`
    padding: 0;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  `,
  checkdIcon: (checked: boolean) => css`
    circle {
      fill: ${checked ? 'black' : '#c4c4c4'};
    }
  `,
  input: () => css`
    display: none;
  `,
  children: () => css`
    padding-left: 8px;
    font-size: 16px;
  `,
};
