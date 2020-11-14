import StyleGuide from "../pages/StyleGuide";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home"
import Dynamic from "../pages/Dynamic";
import { FaDice, FaSitemap, FaHome } from "react-icons/fa";

const routes = [{
  path: '/foo/:id',
  linkPath: '/foo/40',
  exact: true,
  name: 'Dynamic',
  Component: Dynamic,
  navbar: {
    Icon: FaDice,
    order: 3,
    show: true
  }
},{
  path: '/styleguide',
  exact: true,
  name: 'Styleguide',
  Component: StyleGuide,
  navbar: {
    Icon: FaSitemap,
    order: 2,
    show: true
  }
}, {
  path: '/',
  exact: true,
  name: 'Home',
  Component: Home,
  extraClass:"home",
  navbar: {
    Icon: FaHome,
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

