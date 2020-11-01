export function checkFunctionExist(fn) {
  return fn && typeof fn === 'function';
}

export function callFunctionIfExist(fn, param) {
  checkFunctionExist(fn) && fn(param);
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

  if (hrs === 0 && mins === 0 && secs === 0) return '';
  return hrs > 0 ? `${padNumber(hrs)}h ${padNumber(mins)}m` : `${padNumber(mins)}m ${padNumber(secs)}s`;
}