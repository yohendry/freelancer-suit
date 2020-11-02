import React, { useRef, useEffect, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { SidebarContext } from "../../App";

function Sidebar({ open }) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { screenIsAtLeast } = useWindowSize();
  const sidebarRef = useRef(null);

  const links = [{
    id: 1,
    name: 'Home',
    path: '/',
    icon: 'fa-home'
  },{
    id: 2,
    name: 'Style Guide',
    path: '/styleguide',
    icon: 'fa-sitemap'
  }];

  useEffect(() => {
    if(isSidebarOpen) {
      sidebarRef.current.focus();
    }
  }, [isSidebarOpen])

  const willHide = () => {
    if (open) return false;
    return !screenIsAtLeast('md');
  }

  return (
    <aside
      className={`sidebar md:w-64 md:relative ${willHide() ? 'hide-sidebar' : ''}`} >
      <div className="ml-4 mr-4 md:mr-2 flex justify-between">
        <Link to='/' className="navlink-home">
          freelancer suite
        </Link>
        <button
          className="p-3 rounded-md text-blue-500 hover:text-blue-400 md:hidden hover:outline-none"
          ref={sidebarRef}
          onClick={ () => setIsSidebarOpen(false) }
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 460.775 460.775">
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
	c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
	c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
          </svg>
        </button>
      </div>
      <nav className="mt-5">
        <ul className="text-gray-400">
          {links.map(link => (
            <li className="relative px-4 my-2" key={link.id}>
              <NavLink
                to={link.path}
                onClick={ () => setIsSidebarOpen(false) }
                exact
                activeClassName="active"
                className="navlink"
              >
                <span className="navlink-indicator" aria-hidden="true" />
                { link.icon && <i className={`mr-4 fas ${link.icon}`} />}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
