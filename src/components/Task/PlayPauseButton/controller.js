import { useRef, useEffect } from 'react';
import { isFunction, callFunctionIfExist, clearIntervalIfExist } from '@Home/utils.js';

function usePlayPauseButton({ _onTimerStart, _onTimerStop, _onTimerTick, setHasStarted, hasStarted }) { 
  const INTERVAL_TIME = 1000;
  const interval = useRef();
  const timerStartDate = useRef(null);

  useEffect(() => {
    return () => {clearIntervalTimer()};
  }, []);

  const startTimer = () => {
    timerStartDate.current = new Date();
    callFunctionIfExist(timerStartDate.current, _onTimerStart);

    const hasNoTickCallback = !isFunction(_onTimerTick);

    if (hasNoTickCallback) {
      setHasStarted(true);
      return; //don't set interval is tick function does not exist
    }

    const tickHandler = () => { 
      const tickDate = new Date();
      const params = {
        date: tickDate,
        elapsed: tickDate - timerStartDate.current
      };
      callFunctionIfExist(params, _onTimerTick);
    }

    interval.current = setInterval(() => {
      tickHandler();
    }, INTERVAL_TIME);
    setHasStarted(true);
  }

  const stopTimer = () => {
    const stopDate =  new Date();
    callFunctionIfExist({
      date: stopDate,
      elapsed: stopDate - timerStartDate.current
    }, _onTimerStop);
    clearIntervalIfExist(interval.current);
    setHasStarted(false);
  }

  const clearIntervalTimer = () => clearIntervalIfExist(interval.current);

  return {startTimer, stopTimer};
}

export default usePlayPauseButton;