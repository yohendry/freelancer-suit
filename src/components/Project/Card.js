import React from 'react';
import { FaTrello, FaJira } from 'react-icons/fa';
import ExternalLink from '@Components/common/ExternalLink';
import clsx from 'clsx';

function Card({ project, className }) {
  const { url, title, provider, description } = project;
  const label = `${provider.toUpperCase()} - ${title}`;
  const classes = {
    panel: clsx('panel', className),
    panelTitle: clsx('panel--title', 'flex', 'mb-0', 'align-middle'),
    panelTitleSpan: clsx('flex-auto', 'font-normal'),
    panelTitleIconWrapper: clsx('flex-none', 'mr-2'),
    providerIconClasses: clsx('pt-1', 'h-6', 'w-6'),
    externalLink: clsx('pt-1'),
    panelBody: clsx('panel--body', 'text-sm')
  };

  const getProviderIcon = (provider) => {
    return provider === 'trello' ? (
      <FaTrello className={classes.providerIconClasses} />
    ) : (
      <FaJira className={classes.providerIconClasses} />
    );
  };

  return (
    <div className={classes.panel}>
      <div className={classes.panelTitle}>
        <span className={classes.panelTitleIconWrapper}>{getProviderIcon(provider)}</span>
        <ExternalLink
          className={classes.externalLink}
          url={url}
          label={label}
          title={label} />
        <span className={classes.panelTitleSpan}>{title}</span>
      </div>
      <div className={classes.panelBody}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
