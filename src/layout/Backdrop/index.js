import React from 'react';

function Backdrop({closeSidebar}) {

  return (
    <div
      onClick={() => closeSidebar()}
      className="absolute bg-black inset-0 z-40 md:hidden bg-opacity-75" />
  );
}

export default Backdrop;