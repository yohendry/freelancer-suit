import React from 'react';
import clsx from 'clsx';
function Footer() {
  const classes = {
    footer: clsx('text-sm', 'text-right')
  };
  return (
    <footer className={classes.footer}>
      Yohendry Hurtado & Roberto Duran - 2020
    </footer>
  );
}

export default Footer;
