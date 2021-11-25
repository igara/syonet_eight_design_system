import React from 'react';
import { styles } from './dialog.style';

type Props = {};

export const Dialog: React.FC<Props> = () => {
  return (
    <>
      <style jsx>{styles}</style>

      <dialog className="dialog"></dialog>
    </>
  );
};
