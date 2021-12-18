import React from 'react';
import * as Styels from './standard_dialog.style';
import { CloseIcon } from '@design_system/src/components/icons';
import { Global } from '@emotion/react';

export interface StandardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  content?: {
    width?: Styels.ContentStyleProps['width'];
    height?: Styels.ContentStyleProps['height'];
  };
}

export const StandardDialog: React.FC<StandardDialogProps> = (props) => {
  return (
    <dialog
      css={Styels.styles.dialog({ isOpen: props.isOpen })}
      open={props.isOpen}
      onClick={props.onClose}>
      <Global styles={Styels.styles.scroll(props.isOpen)}></Global>

      <div
        css={Styels.styles.content({
          width: props?.content?.width || 'auto',
          height: props?.content?.height || 'auto',
        })}
        onClick={(e) => e.stopPropagation()}>
        <div css={Styels.styles.children()}>{props.children}</div>

        <span css={Styels.styles.close()} onClick={props.onClose}>
          <CloseIcon />
        </span>
      </div>
    </dialog>
  );
};
