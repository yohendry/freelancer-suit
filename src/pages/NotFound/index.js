import React, {forwardRef} from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="w-full flex items-center justify-center h-full">
    <div className="max-w-sm m-8">
      <div className="text-black text-5xl md:text-15xl font-black">404</div>
      <div className="w-16 h-1 bg-purple-light my-3 md:my-6" />
      <p
        className="text-grey-darker text-2xl md:text-3xl font-light mb-8 leading-normal" >
        Sorry,
        the page you are looking for could not be found.</p>
      <Link
        to="/"
        className="btn uppercase"
      >
        Go Home
      </Link>
    </div>
  </div>
);

export default forwardRef(NotFound);