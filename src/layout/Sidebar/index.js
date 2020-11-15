import React, { useRef, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import useWindowSize from '../../hooks/useWindowSize';
import { SidebarContext } from '../../App';
import routes from '../../conf/routes.js';
import theme from '../../conf/theme.js';

function Sidebar({ minWidth, showBrand }) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { screenIsAtMost, screenIsAtLeast } = useWindowSize();
  const sidebarRef = useRef(null);

  const checkCloseSidebar = () => { 
    if (screenIsAtLeast('md')) { 
      return;
    }
    setIsSidebarOpen(false);
  }

  const buildSidebarLinks = (routes) => { 
    const isSidebarRoute = (route) => {
      if (!('navbar' in route)) return false;
      return 'show' in route.navbar && route.navbar.show && 'order' in route.navbar;
    };
    const sortLinks = (prev, current) => (prev.order < current.order ? -1 : 1);
    return routes
      .filter(isSidebarRoute)
      .map((link) => ({ ...link, ...link.navbar }))
      .sort(sortLinks);
  }

  const links = buildSidebarLinks(routes);
  

  

  const sidebarClasses = ['shadow-2xl', 'md:shadow-none', 'sidebar', 'top-0', 'md:relative'];
  if (!isSidebarOpen) {
    screenIsAtLeast('md') ? sidebarClasses.push('shrink-sidebar') : sidebarClasses.push('hide-sidebar');
  } else { 
    sidebarClasses.push('md:w-64');
  }

  if (theme.layout === theme.CONST.THEME.LAYOUT.SIDEBAR_FIRST) {
    sidebarClasses.push('md:pt-0');
  }

  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }
    sidebarRef.current.focus();
    
  }, [isSidebarOpen]);

  const hideHeader = theme.layout === theme.CONST.THEME.LAYOUT.HEADER_FIRST;

  return (
    <aside className={sidebarClasses.join(' ')}>
      <div
        className={`${isSidebarOpen ? 'ml-10' : 'ml-3'} mr-4 md:mr-2 flex justify-between my-4 ${
          hideHeader ? 'md:hidden' : ''
        }`}
      >
        {(showBrand || screenIsAtMost('md')) && (
          <Link to="/" className="navlink-home text-2xl md:text-sm" onClick={checkCloseSidebar}>
            {screenIsAtLeast('md') && !isSidebarOpen ? 'FS' : 'Freelancer Suite'}
          </Link>
        )}
        <button
          className="p-3 rounded-md text-blue-500 hover:text-blue-400 md:hidden hover:outline-none"
          ref={sidebarRef}
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaWindowClose className="w-6 h-6" aria-hidden="true" fill="currentColor" />
        </button>
      </div>
      <nav className="mt-5 md:mt-0">
        <ul className="text-gray-400">
          {links.map(({ name, exact, path, Icon, linkPath, extraClass }) => (
            <li
              className={`relative ${isSidebarOpen ? 'pr-12' : 'mr-4'} my-2`}
              key={name}
            >
              <NavLink
                to={linkPath ? linkPath : path}
                onClick={checkCloseSidebar}
                exact={exact}
                aria-label={name}
                title={name}
                activeClassName="active"
                className={`navlink ${extraClass} text-2xl md:text-sm my-2 md:my-0 py-3 md:py-2`}
              >
                <span className="navlink-indicator" aria-hidden="true" />
                {<Icon className="sidebar-icon" />}
                <span className="tag">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
