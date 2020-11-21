export function isFunction(fn) {
  return fn && typeof fn === 'function';
}
/**
 * 
 * @param {Object} param Object passed by params to the callback
 * @param {CallableFunction} fn Main callback function
 * @param {CallableFunction} failSafe Failsafe callback function, it is called just if main callback function is not set
 */
export function callFunctionIfExist(params, fn, failSafe) {
  if (isFunction(fn)) {
    return fn(params);
  } else if (isFunction(failSafe)) {
    return failSafe(params);
  } else { 
    return false;
  }
}

export function formatMilliseconds(s) {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  function padNumber(n) {
    return n.toString().padStart(2, '0');
  }

  return hrs > 0 ? `${padNumber(hrs)}h ${padNumber(mins)}m` : `${padNumber(mins)}m ${padNumber(secs)}s`;
}

export function clearIntervalIfExist(interval) {
  interval && clearInterval(interval);
}