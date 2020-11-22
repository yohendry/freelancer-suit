import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';

const baseAnimationOption = {
  duration: 0.5, ease: 'ease-in'
};

const PageAnimationRenderer = ({ children }) => {
  useEffect(() => {
    gsap.fromTo('.page-animation-renderer', { opacity: 0 }, { opacity: 1, ...baseAnimationOption });
    return () => {
      gsap.fromTo('.page-animation-renderer', { opacity: 1 }, { opacity: 0, ...baseAnimationOption });
    };
  }, [children]);

  const classes = {
    pageAnimation: clsx('page-animation-renderer'),
  };
  return <div className={classes.pageAnimation}>{children}</div>;
};

export default PageAnimationRenderer;
