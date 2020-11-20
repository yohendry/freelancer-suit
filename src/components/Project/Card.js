import React from 'react';
import ExternalLink from '@Components/common/ExternalLink';
import {
  FaTrello,
  FaJira,
} from "react-icons/fa";

function Card({ project, className }) {
  const { url, title, provider, description } = project;
  const label = `${provider.toUpperCase()} - ${title}`;
  const providerIconClasses = 'pt-1 h-6 w-6';
  const providerIcon = provider === "trello" ? <FaTrello className={providerIconClasses} /> : <FaJira className={providerIconClasses} />;
  return (
    <div className={`panel ${className}`}>
      <div className="panel--title flex mb-0 align-middle">
        <span className="flex-none mr-2">{providerIcon}</span>
        <ExternalLink className="pt-1" url={url} label={label} title={label} />
        <span className="flex-auto font-normal">{ title }</span>
      </div>
      <div className="panel--body text-sm">
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default Card;
