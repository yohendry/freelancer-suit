import React, { useRef, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaWindowClose } from 'react-icons/fa';
import useWindowSize from "../../hooks/useWindowSize";
import { SidebarContext } from "../../App";
import routes from "../../conf/routes.js";
import theme from "../../conf/theme.js";

function Sidebar({ open, minWidth, showBrand }) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { screenIsAtLeast, screenIsAtMost } = useWindowSize();
  const sidebarRef = useRef(null);

  const isSidebarRoute = (route) => {
    if (!("navbar" in route)) return false;
    return (
      "show" in route.navbar && route.navbar.show && "order" in route.navbar
    );
  };

  const sortLinks = (prev, current) => (prev.order < current.order ? -1 : 1);

  const links = routes
    .filter(isSidebarRoute)
    .map((link) => ({ ...link, ...link.navbar }))
    .sort(sortLinks);

  useEffect(() => {
    if (isSidebarOpen) {
      sidebarRef.current.focus();
    }
  }, [isSidebarOpen]);

  const willHide = () => {
    if (open) return false;
    return !screenIsAtLeast("md");
  };

  const classes = [
    "shadow-2xl",
    "md:shadow-none",
    "sidebar",
    "md:w-64",
    "top-0",
    "md:relative",
  ];

  if (willHide()) {
    classes.push("hide-sidebar");
  }

  if (theme.layout === theme.CONST.THEME.LAYOUT.SIDEBAR_FIRST) {
    classes.push("md:pt-0");
  }

  return (
    <aside className={classes.join(" ")} style={{ minWidth: minWidth }}>
      <div
        className={`ml-10 mr-4 md:mr-2 flex justify-between my-4 ${
          theme.layout === theme.CONST.THEME.LAYOUT.HEADER_FIRST ? "md:hidden" : ''
        }`}
      >
        {(showBrand || screenIsAtMost("md")) && <Link to="/" className="navlink-home text-2xl md:text-sm">
          freelancer suite
        </Link>}
        <button
          className="p-3 rounded-md text-blue-500 hover:text-blue-400 md:hidden hover:outline-none"
          ref={sidebarRef}
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaWindowClose
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
          />
        </button>
      </div>
      <nav className="mt-5 md:mt-0">
        <ul className="text-gray-400">
          {links.map(({ name, exact, path, Icon, linkPath, extraClass }) => (
            <li className="relative pr-12 my-2" key={name}>
              <NavLink
                to={linkPath ? linkPath : path}
                onClick={() => setIsSidebarOpen(false)}
                exact={exact}
                activeClassName="active"
                className={`navlink ${extraClass} text-2xl md:text-sm my-2 md:my-0 py-3 md:py-2`}
              >
                <span className="navlink-indicator" aria-hidden="true" />
                {<Icon className="mr-4" />}
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
