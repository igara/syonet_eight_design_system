import React from 'react';
import * as Styels from './standard_dialog.style';
import { CloseIcon } from '@design_system/src/components/icons';

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
      <div
        css={Styels.styles.content({
          width: props?.content?.width || '200px',
          height: props?.content?.height || '200px',
        })}
        onClick={(e) => e.stopPropagation()}>
        <div>{props.children}</div>

        <span css={Styels.styles.close()} onClick={props.onClose}>
          <CloseIcon />
        </span>
      </div>
    </dialog>
  );
};
