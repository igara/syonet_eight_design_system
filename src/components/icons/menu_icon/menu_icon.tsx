import React from 'react';

import { styles } from './menu_icon.styles';

type Props = {};

export const MenuIcon: React.FC<Props> = () => {
  return <i css={styles.menuIcon('yellow')}>c</i>;
};
