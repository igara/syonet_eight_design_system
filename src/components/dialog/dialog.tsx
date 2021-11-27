import React from 'react';
import { styles } from './dialog.style';

type Props = {};

export const Dialog: React.FC<Props> = () => {
  return <dialog css={styles.dialog}></dialog>;
};
