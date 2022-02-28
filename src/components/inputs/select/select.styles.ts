import { css } from '@emotion/react';

type DummyBackgrounProps = {
  displayDimmySelect: boolean;
};

type DummySelectProps = {
  displayDimmySelect: boolean;
};

export const styles = {
  wrapper: () => css`
    position: relative;
  `,
  select: () => css`
    display: none;
  `,
  dummyBackground: (props: DummyBackgrounProps) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: ${props.displayDimmySelect ? 'initial' : 'none'};
    width: 100%;
    height: 100%;
  `,
  dummySelectedValue: () => css`
    padding: 2px;
    display: flex;
    align-items: center;
    background: white;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 16px;
    user-select: none;
    word-break: break-all;

    label {
      width: 100%;
    }

    svg {
      margin: 0 4px;
      margin-left: auto;
    }
  `,
  dummySelect: (props: DummySelectProps) => css`
    position: absolute;
    margin-top: 8px;
    padding: 2px;
    display: ${props.displayDimmySelect ? 'initial' : 'none'};
    width: 100%;
    background: white;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  `,
  dummyOption: () => css`
    word-break: break-all;
    user-select: none;

    :hover {
      color: white;
      background: gray;
    }
  `,
};
