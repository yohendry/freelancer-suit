import routes from '@Conf/routes.js';

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

function useSidebarController(props) { 
  const links = buildSidebarLinks(routes);
  return { links };
}

export default useSidebarController;