import React from 'react';
import { Link } from 'react-router-dom';
import { BiBell } from 'react-icons/bi';
import { FaBars, FaSearch } from 'react-icons/fa';
import clsx from 'clsx';
import avatar1 from '@Images/avatar-1.svg';
import avatar2 from '@Images/avatar-2.svg';
import avatar3 from '@Images/avatar-3.svg';
import avatar4 from '@Images/avatar-4.svg';
import SidebarToggleButton from '@Layout/Header/SidebarToggleButton';

function Header({ className, showBrand }) {
  const avatarList = [avatar1, avatar2, avatar3, avatar4];
  const classes = {
    header: clsx(
      'flex',
      'items-center',
      'z-10',
      'p-4',
      'bg-white',
      'shadow-md',
      'bg-gray-800',
      'text-blue-500',
      className
    ),
    headerInner: clsx('flex-1', 'flex', 'items-center', 'justify-between', 'h-full'),
    sidebarToggleButton: clsx('p-1', 'mr-3', 'rounded-md', 'hover:text-blue-400'),
    sidebarToggleButtonIcon: clsx('w-6', 'h-6'),
    homeLink: clsx('navlink-home', 'mr-6', 'hidden', 'md:block'),
    headerBody: clsx('flex', 'flex-1'),
    headerBodyInner: clsx('relative', 'w-full', 'max-w-xl', 'mr-6', 'focus-within:text-purple-500'),
    headerSearchIconWrapper: clsx('absolute', 'inset-y-0', 'flex', 'items-center', 'pl-4'),
    headerSearchIcon: clsx('h-4', 'w-4'),
    headerSearch: clsx('search-field', 'placeholder-gray-500'),
    headerActions: clsx('flex', 'items-center', 'flex-shrink-0', 'space-x-4'),
    headerNotificationWrapperClass: clsx('relative', 'align-middle', 'rounded-md', 'hover:text-blue-400'),
    headerNotificationWrapperClassIndicator: clsx(
      'absolute',
      'top-0',
      'right-0',
      'inline-block',
      'w-3',
      'h-3',
      'bg-red-600',
      'border-2',
      'border-white',
      'rounded-full',
      'dark:border-gray-800'
    ),
    headerAvatarButton: clsx('align-middle', 'rounded-full'),
    headerAvatarImage: clsx('object-cover', 'w-10', 'h-10', 'rounded-full', 'p-1', 'bg-white')
  };
  const avatarIndex = Math.floor(Math.random() * avatarList.length);
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <SidebarToggleButton className={classes.sidebarToggleButton}>
          <FaBars
            className={classes.sidebarToggleButtonIcon}
            aria-hidden="true"
            fill="currentColor"
          />
        </SidebarToggleButton>
        {showBrand && (
          <Link to="/" className={classes.homeLink}>
            freelancer suite
          </Link>
        )}
        <div className={classes.headerBody}>
          <div className={classes.headerBodyInner}>
            <div className={classes.headerSearchIconWrapper}>
              <FaSearch className={classes.headerSearchIcon} />
            </div>
            <input
              className={classes.headerSearch}
              type="text"
              placeholder="Search for projects"
              aria-label="Search" />
          </div>
        </div>
        <ul className={classes.headerActions}>
          <li
            className="relative"
            style={{ fontSize: '1.75em' }}>
            <button
              className={classes.headerNotificationWrapperClass}
              aria-label="Notifications" aria-haspopup="true">
              <BiBell />
              <span
                aria-hidden="true"
                className={classes.headerNotificationWrapperClassIndicator} />
            </button>
          </li>
          <li className="relative">
            <button
              className={classes.headerAvatarButton}
              aria-label="Account"
              aria-haspopup="true">
              <img
                className={classes.headerAvatarImage}
                src={avatarList[avatarIndex]}
                alt="Person Name"
                aria-hidden="true"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
