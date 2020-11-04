import StyleGuide from "../pages/StyleGuide";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home"
import Dynamic from "../pages/Dynamic";

const routes = [{
  path: '/foo/:id',
  linkPath: '/foo/40',
  exact: true,
  name: 'Dynamic',
  Component: Dynamic,
  navbar: {
    icon: 'fa-dice',
    order: 3,
    show: true
  }
},{
  path: '/styleguide',
  exact: true,
  name: 'Styleguide',
  Component: StyleGuide,
  navbar: {
    icon: 'fa-sitemap',
    order: 2,
    show: true
  }
}, {
  path: '/',
  exact: true,
  name: 'Home',
  Component: Home,
  navbar: {
    icon: 'fa-home',
    order: 1,
    show: true
  }
}, {
  path: null,
  name: 'Not found',
  Component: NotFound,
  navbar: {
    show: false
  }
}];

export default routes;

