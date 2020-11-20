import React from 'react';
import clsx from 'clsx';

function Backdrop({closeSidebar}) {
  const classes = {
    backdrop: clsx('absolute', 'bg-black', 'inset-0', 'z-40', 'md:hidden', 'bg-opacity-75')
  };
  return (
    <div
      onClick={() => closeSidebar()}
      className={classes.backdrop}
    />
  );
}

export default Backdrop;