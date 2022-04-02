import { css } from '@emotion/react';

type Dialog = {
  isOpen: boolean;
};

export const styles = {
  dialog: (props: Dialog) => css`
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props.isOpen ? '100%' : '0'};
    height: ${props.isOpen ? '100%' : '0'};
    padding: 0;
    border: 0;
    background: rgba(50, 50, 50, 0.5);
    visibility: ${props.isOpen ? 'visible' : 'hidden'};
    opacity: ${props.isOpen ? 1 : 0};
    transition: opacity 0.5s, visibility 0.5s, width ${props.isOpen ? '0s' : '0.5s 0.5s'},
      height ${props.isOpen ? '0s' : '0.5s 0.5s'};
  `,
  content: () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    width: auto;
    height: auto;
    border: 2px solid;
    border-radius: 20px;
    background: white;
  `,
  close: () => css`
    position: absolute;
    padding: 0;
    top: 12px;
    right: 12px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;
  `,
  children: () => css`
    width: 100%;
    height: 100%;
    overflow: auto;
  `,
  scroll: (isOpen: boolean) => css`
    html body {
      overflow: ${isOpen ? 'hidden' : 'initial'};
    }
  `,
};
