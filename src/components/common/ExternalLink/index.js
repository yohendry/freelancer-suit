import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

function index({ url, label, title, className }) {
  const classes = `link inline-block items-center align-middle ${className || ''}`;
  return (
    <a
      href={url}
      className={classes}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={title}
    >
      <FaExternalLinkAlt className="align-middle"/>
    </a>
  );
}

export default index;
