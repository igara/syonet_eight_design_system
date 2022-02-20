import React from 'react';
import * as Styles from './standard_dialog.style';
import { CloseIcon } from '@design_system/src/components/icons';
import { Global } from '@emotion/react';

export interface StandardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  content?: {
    width?: Styles.ContentStyleProps['width'];
    height?: Styles.ContentStyleProps['height'];
  };
}

export const StandardDialog: React.FC<StandardDialogProps> = (props) => {
  return (
    <dialog
      css={Styles.styles.dialog({ isOpen: props.isOpen })}
      open={props.isOpen}
      onClick={props.onClose}>
      <Global styles={Styles.styles.scroll(props.isOpen)}></Global>

      <div
        css={Styles.styles.content({
          width: props?.content?.width || 'auto',
          height: props?.content?.height || 'auto',
        })}
        onClick={(e) => e.stopPropagation()}>
        <div css={Styles.styles.children()}>{props.children}</div>

        <button css={Styles.styles.close()} onClick={props.onClose} type="button">
          <CloseIcon />
        </button>
      </div>
    </dialog>
  );
};
