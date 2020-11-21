import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import {
  FaTrello,
  FaJira,
  FaWallet,
  FaHourglassEnd,
} from "react-icons/fa";

import clsx from 'clsx';
import PlayPauseButton from "@Components/Task/PlayPauseButton";
import ExternalLink from '@Components/common/ExternalLink';
import { formatMilliseconds } from "@Home/utils.js";
import useTaskController from './controller.js';

function Task(props, ref) {
  const { task, _onTimerStart } = props;
  const { done, billable, provider, title, url, id, elapsed } = task;

  const [active, setActive] = useState(false);
  const { currentElapsed, onTimerStop, onTimerStart, onTimerTick } = useTaskController({ elapsed, _onTimerStart, setActive, id });

  const playPauseButtonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    stopTimer: () => {
      playPauseButtonRef.current.stop();
    },
  }));

  const setPlayPauseRef = (ref) => {
    playPauseButtonRef.current = ref;
  };

  const iconProvider = provider === "trello" ? <FaTrello /> : <FaJira />;

  const classes = {
    mainDiv: clsx("task-item", billable ? "billable" : null, done ? "done" : null, active ? "active" : null),
    iconWrapper: clsx('icon', 'md:text-5xl', provider),
    taskBody: clsx('task-item--body'),
    taskTitle: clsx('inline-block'),
    taskFooter: clsx('task-item--body--footer', 'text-xs'),
    taskBodyIconWrapper: clsx('mr-1', 'text-md', 'inline-block'),
    taskBodySide: clsx('task-item--body-side'),
    playPauseButton: clsx('text-5xl'),
    textTime: clsx('text-time')
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.iconWrapper}>
        {iconProvider}
      </div>
      <div className={classes.taskBody}>
        <ExternalLink
          url={url}
          label={id}
          title={`${provider.toUpperCase()} - ${id} -  ${title}`}
        />
        <span className={classes.taskTitle}>{title}</span>
        <div className={classes.taskFooter}>
          <span className={classes.taskBodyIconWrapper}>
            <FaWallet />
          </span>
          {currentElapsed > 0 && (
            <span className="timer">
              <span className={classes.taskBodyIconWrapper}>
                <FaHourglassEnd />
              </span>
              <span>{formatMilliseconds(currentElapsed)}</span>
            </span>
          )}
        </div>
      </div>
      <div className={classes.taskBodySide}>
        {done ? (
          <div>
            <small className={classes.textTime}>09h 15m</small>
            <small className={classes.textTime}>09h 45m</small>
          </div>
        ) : (
          <PlayPauseButton
            className={classes.playPauseButton}
            ref={setPlayPauseRef}
            _onTimerStop={onTimerStop}
            _onTimerStart={onTimerStart}
            _onTimerTick={onTimerTick}
          />
        )}
      </div>
    </div>
  );
}

export default forwardRef(Task);
