import React, { useRef, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { NavLink, Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { SidebarContext } from '@Home/App';

import useWindowSize from '@Hooks/useWindowSize';
import useSidebarController from './controller.js';
import theme from '@Conf/theme.js';

function Sidebar({ minWidth, showBrand }) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { screenIsAtMost, screenIsAtLeast } = useWindowSize();
  const sidebarRef = useRef(null);
  const { links } = useSidebarController();

  const checkCloseSidebar = () => { 
    if (screenIsAtLeast('md')) { 
      return;
    }
    setIsSidebarOpen(false);
  }

  const hideHeader = theme.layout === theme.CONST.THEME.LAYOUT.HEADER_FIRST;

  const classes = {
    sidebar: () => {
      const sidebarClasses = ['shadow-2xl', 'md:shadow-none', 'sidebar', 'top-0', 'md:relative'];
      if (!isSidebarOpen) {
        const tmpClass = screenIsAtLeast('md') ? 'shrink-sidebar' : 'hide-sidebar';
        sidebarClasses.push(tmpClass);
      } else {
        sidebarClasses.push('md:w-64');
      }
      const isLayoutHeaderFirst = theme.layout === theme.CONST.THEME.LAYOUT.SIDEBAR_FIRST;
      if (isLayoutHeaderFirst) {
        sidebarClasses.push('md:pt-0');
      }
      return clsx(sidebarClasses);
    },
    sidebarHeader: clsx('mr-4', 'md:mr-2', 'flex', 'justify-between', 'my-4', isSidebarOpen ? 'ml-10' : 'ml-3', hideHeader && 'md:hidden'),
    brandLink: clsx('navlink-home', 'text-2xl', 'md:text-sm'),
    closeSidebarButton: clsx('p-3', 'rounded-md', 'text-blue-500', 'hover:text-blue-400', 'md:hidden', 'hover:outline-none'),
    closeSidebarButtonIcon: clsx('w-6', 'h-6'),
    sidebarNav: clsx('mt-5', 'md:mt-0'),
    sidebarNavUl: clsx('text-gray-400'),
    sidebarNavUlLi: clsx('relative', 'my-2', isSidebarOpen ? 'pr-12' : 'mr-4'),
    navLink: (extraClass) => clsx('navlink', 'text-2xl', 'md:text-sm', 'my-2', 'md:my-0', 'py-3', 'md:py-2', extraClass),
    navLinkIndicator: clsx('navlink-indicator'),
    navLinkIcon: clsx('sidebar-icon'),
    navLinkTag: clsx('tag')
  };

  const brand = {
    doShow: showBrand || screenIsAtMost('md'),
    text: screenIsAtLeast('md') && !isSidebarOpen ? 'FS' : 'Freelancer Suite'
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }
    sidebarRef.current.focus();
    
  }, [isSidebarOpen]);

  return (
    <aside className={classes.sidebar()}>
      <div className={classes.sidebarHeader}>
        {brand.doShow && (
          <Link to="/" className={classes.brandLink} onClick={checkCloseSidebar}>
            {brand.text}
          </Link>
        )}
        <button
          className={classes.closeSidebarButton}
          ref={sidebarRef}
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaWindowClose className={classes.closeSidebarButtonIcon} aria-hidden="true" fill="currentColor" />
        </button>
      </div>
      <nav className={classes.sidebarNav}>
        <ul className={classes.sidebarNavUl}>
          {links.map(({ name, exact, path, Icon, linkPath, extraClass }) => (
            <li
              className={classes.sidebarNavUlLi}
              key={name}
            >
              <NavLink
                to={linkPath ? linkPath : path}
                onClick={checkCloseSidebar}
                exact={exact}
                aria-label={name}
                title={name}
                activeClassName="active"
                className={classes.navLink(extraClass)}
              >
                <span className={classes.navLinkIndicator} aria-hidden="true" />
                <Icon className={classes.navLinkIcon} />
                <span className={classes.navLinkTag}>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
