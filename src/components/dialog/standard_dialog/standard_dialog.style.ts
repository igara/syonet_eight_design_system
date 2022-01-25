import { css } from '@emotion/react';
import * as CSS from 'csstype';

export type StandardDialogStyleProps = {
  isOpen: boolean;
};

export type ContentStyleProps = {
  width: CSS.Property.Width;
  height: CSS.Property.Height;
};

export const styles = {
  dialog: (props: StandardDialogStyleProps) => css`
    position: fixed;
    top: 0;
    left: 0;
    display: ${props.isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    background: rgba(50, 50, 50, 0.5);
  `,
  content: (props: ContentStyleProps) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 32px;
    width: ${props.width};
    height: ${props.width};
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
