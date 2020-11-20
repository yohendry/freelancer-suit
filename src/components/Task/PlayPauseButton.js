import React, {useEffect, useState, useRef, forwardRef, useImperativeHandle} from 'react';
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
import { checkFunctionExist, callFunctionIfExist } from '@Home/utils.js';

function PlayPauseButton(props, ref) {

  const {_onTimerStart, _onTimerStop, _onTimerTick} = props;
  const intervalTime = 1000;
  const [hasStarted, setHasStarted] = useState(false);

  const interval = useRef();
  const timerStartDate = useRef(null);
  const buttonRef = useRef(null)
    
  useEffect(() => {
    return () => {clearIntervalIfExist()};
  }, []);

  useImperativeHandle(ref, () => ({
    stop: () => {
      timerStartDate.current && stopTimer(timerStartDate.current)
    }
  }));

  const clearIntervalIfExist = () => {
    interval && interval.current && clearInterval(interval.current);
  }

  const handleClickWrapper = () => {
    const currentHasStarted = !hasStarted;
    currentHasStarted ? startTimer() : stopTimer();
  }

  const startTimer = () => {
    timerStartDate.current = new Date();
    callFunctionIfExist(_onTimerStart, timerStartDate.current);

    if(!checkFunctionExist(_onTimerTick)) return; //don't set interval is tick function does not exist

    interval.current = setInterval(() => {
      const tickDate = new Date();
      callFunctionIfExist(_onTimerTick, {
        date: tickDate,
        elapsed: tickDate - timerStartDate.current
      })
    }, intervalTime);
    setHasStarted(true);
  }

  const stopTimer = () => {
    const stopDate =  new Date();
    callFunctionIfExist(_onTimerStop, {
      date: stopDate,
      elapsed: stopDate - timerStartDate.current
    })
    clearIntervalIfExist();
    setHasStarted(false);
  }
  const stopIcon = <FaStopCircle />;
  const playIcon = <FaPlayCircle />;
  const className = `icon-play-stop rounded-full text-4xl md:text-5xl ${hasStarted ? 'stop' : 'play'}`;
  const buttonTitle = hasStarted ? 'Stop timer' : 'Start timer';
  return (
    <button
      ref={buttonRef}
      aria-label={buttonTitle}
      title={buttonTitle}
      className={className}
      onClick={handleClickWrapper}
    >
      {hasStarted ? stopIcon : playIcon}
    </button>
  );
}

export default forwardRef(PlayPauseButton);