import React, { useEffect} from 'react';
import {gsap} from 'gsap';

const PageAnimationRenderer = ({children}) => {
  useEffect(() => {
    gsap.fromTo('.page-animation-renderer',
      {opacity: 0},
      {opacity: 1, duration: 1, ease: "ease-in"}
    );
  }, [children])
  return (
    <div className={"page-animation-renderer"}>
      {children}
    </div>
  );
}

export default PageAnimationRenderer;