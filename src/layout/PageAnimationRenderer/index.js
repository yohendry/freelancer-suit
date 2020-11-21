import React, { useEffect} from 'react';
import { gsap } from 'gsap';
import clsx from 'clsx';

const PageAnimationRenderer = ({children}) => {
  useEffect(() => {
    console.log('repaint');
    gsap.fromTo('.page-animation-renderer',
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "ease-in" }
    );
  }, [children]);

  const classes = {
    pageAnimation: clsx('page-animation-renderer')
  };
  return (
    <div className={classes.pageAnimation}>
      {children}
    </div>
  );
}

export default PageAnimationRenderer;