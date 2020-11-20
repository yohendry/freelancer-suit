import clsx from 'clsx';
import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";
import usePlayPauseButton from '@Components/Task/PlayPauseButton/controller.js';

function PlayPauseButton(props, ref) {
  const [hasStarted, setHasStarted] = useState(false);
  const { startTimer, stopTimer } = usePlayPauseButton({...props, setHasStarted});
  const buttonRef = useRef(null)

  //expose Stop Function
  useImperativeHandle(ref, () => ({
    stop: () => stopTimer()
  }));

  const handleClickWrapper = () => {
    const currentHasStarted = !hasStarted;
    currentHasStarted ? startTimer() : stopTimer();
  }

  const classes = {
    button: clsx('icon-play-stop', 'rounded-full', 'text-4xl', 'md:text-5xl', hasStarted ? 'stop' : 'play')
  };
  const buttonTitle = hasStarted ? 'Stop timer' : 'Start timer';
  return (
    <button
      ref={buttonRef}
      aria-label={buttonTitle}
      title={buttonTitle}
      className={classes.button}
      onClick={handleClickWrapper}
    >
      {hasStarted ? <FaStopCircle /> : <FaPlayCircle />}
    </button>
  );
}

export default forwardRef(PlayPauseButton);