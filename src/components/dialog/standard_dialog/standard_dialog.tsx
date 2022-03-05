import React from 'react';
import * as Styles from './standard_dialog.style';
import { CloseIcon } from '@design_system/src/components/icons';
import { Global, SerializedStyles, css } from '@emotion/react';

export interface StandardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  dialogCSS?: SerializedStyles;
  contentCSS?: SerializedStyles;
}

export const StandardDialog: React.FC<StandardDialogProps> = (props) => {
  const dialogAttribute = {
    css: css`
      ${Styles.styles.dialog({ isOpen: props.isOpen })}
      ${props.dialogCSS}
    `,
    open: props.isOpen,
    onClick: props.onClose,
  };
  const contentAttribute = {
    css: css`
      ${Styles.styles.content()}
      ${props.contentCSS}
    `,
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(),
  };
  return (
    <dialog {...dialogAttribute}>
      <Global styles={Styles.styles.scroll(props.isOpen)}></Global>

      <div {...contentAttribute}>
        <div css={Styles.styles.children()}>{props.children}</div>

        <button css={Styles.styles.close()} onClick={props.onClose} type="button">
          <CloseIcon />
        </button>
      </div>
    </dialog>
  );
};
