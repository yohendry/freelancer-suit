import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import PlayPauseButton from "./PlayPauseButton";
import ExternalLink from '../common/ExternalLink';
import { callFunctionIfExist, formatMilliseconds } from "../../utils.js";
import {
  FaTrello,
  FaJira,
  FaWallet,
  FaHourglassEnd,
} from "react-icons/fa";


function Task(props, ref) {
  const { task, _onTimerStart } = props;
  const { done, billable, provider, title, url, id, elapsed } = task;

  const [active, setActive] = useState(false);
  const [currentElapsed, setCurrentElapsed] = useState(elapsed || 0);
  const initialElapsed = useRef(elapsed || 0);
  const playPauseButtonRef = useRef(null);

  useImperativeHandle(ref, () => ({
    stopTimer: () => {
      playPauseButtonRef.current.stop();
    },
  }));

  const onTimerStart = () => {
    setActive(true);
    callFunctionIfExist(_onTimerStart, id);
  };

  const onTimerStop = (result) => {
    updateElapsed(result.elapsed);
    initialElapsed.current = currentElapsed;
    setActive(false);
  };
  const onTimerTick = (result) => {
    updateElapsed(result.elapsed);
  };

  const updateElapsed = (newElapsed) => {
    setCurrentElapsed(initialElapsed.current + newElapsed);
  };

  const setPlayPauseRef = (ref) => {
    playPauseButtonRef.current = ref;
  };

  const classes = [
    "task-item",
    billable ? "billable" : null,
    done ? "done" : null,
    active ? "active" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <div className={`icon md:text-5xl ${provider}`}>
        {provider === "trello" ? <FaTrello /> : <FaJira />}
      </div>
      <div className="task-item--body">
        <ExternalLink url={url} label={id} title={`${provider.toUpperCase()} - ${id} -  ${title}`} />
        <span className="inline-block">{title}</span>
        <div className="task-item--body--footer text-xs">
          <span className="mr-1 text-md inline-block">
            <FaWallet />
          </span>
          {currentElapsed > 0 && (
            <span className="timer">
              <span className="mr-1 text-md inline-block">
                <FaHourglassEnd />
              </span>
              <span>{formatMilliseconds(currentElapsed)}</span>
            </span>
          )}
        </div>
      </div>
      <div className="task-item--body-side">
        {done ? (
          <div>
            <small className="text-time">09h 15m</small>
            <small className="text-time">09h 45m</small>
          </div>
        ) : (
          <PlayPauseButton
            className={"text-5xl"}
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
