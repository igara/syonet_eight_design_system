import React from 'react';

import styles from './menu_icon.module.css';

type Props = {};

export const MenuIcon: React.FC<Props> = () => {
  return (
    <>
      <i className={styles.menuIcon}>c</i>
    </>
  );
};
