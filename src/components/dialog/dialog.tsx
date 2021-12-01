import React from 'react';
import * as Styels from './dialog.style';

type Props = {
  isOpen: boolean;
  onCloseButton: () => void;
  content?: {
    width?: Styels.ContentStyleProps['width'];
    height?: Styels.ContentStyleProps['height'];
  };
};

export const Dialog: React.FC<Props> = (props) => {
  return (
    <dialog css={Styels.styles.dialog()} open={props.isOpen}>
      <div
        css={Styels.styles.content({
          width: props?.content?.width || '200px',
          height: props?.content?.height || '200px',
        })}>
        <div>{props.children}</div>
        <div>
          <button css={Styels.styles.closeButton} onClick={props.onCloseButton}>
            閉じる
          </button>
        </div>
      </div>
    </dialog>
  );
};
