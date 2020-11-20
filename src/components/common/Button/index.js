import clsx from 'clsx';
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { callFunctionIfExist } from '@Home/utils.js';


const getComplementaryClasses = (type) => {
  let variantClass = null,
    spinClass = 'text-gray-600';

  switch (type) {
  case 'primary':
    variantClass = 'btn-primary';
    spinClass = 'text-white';
    break;
  case 'secondary':
    variantClass = 'btn-secondary';
    spinClass = 'text-blue-600';
    break;
  default:
    break;
  }

  return { variantClass, spinClass };
};

function Button(props) {
  const { type, disabled, className, _onClick } = props;
  const [busy, setBusy] = useState(false);

  const { variantClass, spinClass } = getComplementaryClasses(type);
  const classes = {
    button: clsx('btn', variantClass, busy && 'busy', className),
    busyDiv: 'btn-busy',
    spinnerIcon: clsx('animate-spin', 'text-white','w-5', 'h-5', spinClass, 'inline', 'self-center')
  };

  const defaultFunction = () => {
    console.log('click');
  };
  
  const handleClickWrapper = () => {
    
    const result = callFunctionIfExist(null, _onClick, defaultFunction);

    if (!(result && 'then' in result && typeof result.then === 'function')) {
      //result is not a promise
      return;
    }

    setBusy(true);
    result.then(() => setBusy(false)).catch(() => setBusy(false));
  };

  return (
    <button
      className={classes.button}
      disabled={disabled}
      onClick={handleClickWrapper} >
      {busy && (
        <div className={classes.busyDiv}>
          <CgSpinner className={classes.spinnerIcon} />
        </div>
      )} <span>{props.children}</span>
    </button>
  );
}

export default Button;
