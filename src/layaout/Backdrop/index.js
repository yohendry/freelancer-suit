import React from 'react';

function Backdrop(props) {

  return (
    <div className="absolute bg-gray-900 inset-0 z-40 md:hidden bg-opacity-75" />
  );
}

export default Backdrop;