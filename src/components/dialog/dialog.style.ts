import { css } from '@emotion/react';
import * as CSS from 'csstype';

export type ContentStyleProps = {
  width: CSS.Property.Width;
  height: CSS.Property.Height;
};

export const styles = {
  dialog: () => css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
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
    width: ${props.width};
    height: ${props.width};
    border: 2px solid;
    border-radius: 20px;
    background: white;

    div:last-child {
      position: absolute;
      bottom: 12px;
    }
  `,
  closeButton: () => css``,
};
