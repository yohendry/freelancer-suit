import { useState, useEffect, useCallback } from 'react';
import { breakpoints } from '@Home/constants.js';

const _screenIsAtLeast = (windowSize, key) => {
  const size = breakpoints[key];
  return size && !isNaN(size) && windowSize >= size ? true : false;
};

const _screenIsAtMost = (windowSize, key) => {
  const size = breakpoints[key];
  return size && !isNaN(size) && windowSize < size ? true : false;
};

function useWindowSize() {
  const isWindowClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState(isWindowClient ? window.innerWidth : undefined);
  const [isMobile, setIsMobile] = useState(windowSize ? window.innerWidth : undefined);

  const screenIsAtLeast = useCallback((key) => _screenIsAtLeast(windowSize, key), [windowSize]);
  const screenIsAtMost = useCallback((key) => _screenIsAtMost(windowSize, key), [windowSize]);

  //👇
  useEffect(() => {
    if (!isWindowClient) return;
    const setSize = () => setWindowSize(window.innerWidth)
    window.addEventListener('resize', setSize);
    //un-register the listener
    return () => window.removeEventListener('resize', setSize);
  }, [isWindowClient, setWindowSize]);
  //☝️

  useEffect(() => {
    if (!isWindowClient) return;
    const calculatedIsMobile = screenIsAtMost('md');
    if (isMobile === calculatedIsMobile) return;
    setIsMobile(calculatedIsMobile);
  }, [isWindowClient, isMobile, setIsMobile, screenIsAtMost]);

  return { windowSize, screenIsAtLeast, screenIsAtMost, isMobile };
}

export default useWindowSize;
