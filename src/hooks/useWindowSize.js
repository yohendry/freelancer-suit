import { useState, useEffect } from "react";
import { breakpoints } from '../constants.js'

function useWindowSize() {
  const isWindowClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  );

  //👇
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(window.innerWidth);
    }

    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);

      //un-register the listener
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  //☝️

  const screenIsAtLeast = (key) => {
    const size = breakpoints[key];
    return (size && !isNaN(size) && windowSize >= size) ? true : false;
  };

  const screenIsAtMost = (key) => {
    const size = breakpoints[key];
    return (size && !isNaN(size) && windowSize < size) ? true : false;
  };

  return {windowSize, screenIsAtLeast, screenIsAtMost};
}

export default useWindowSize;