import { useRef, useState } from 'react';
import { callFunctionIfExist } from '@Home/utils.js';

function useTaskController({ elapsed, _onTimerStart, setActive, id }) { 
  const [currentElapsed, setCurrentElapsed] = useState(elapsed || 0);
  const initialElapsed = useRef(elapsed || 0);

  const onTimerStart = () => {
    setActive(true);
    callFunctionIfExist(id, _onTimerStart);
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

  return {currentElapsed, onTimerStart, onTimerStop, onTimerTick}
}

export default useTaskController;