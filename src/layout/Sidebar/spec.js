import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import theme from '@Conf/theme.js';
// Subject Under Test
import Sidebar, { SidebarContext } from './index.js';

const setIsSidebarOpen = jest.fn();
// const mockSetState = jest.fn();
// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initial) => [initial, mockSetState],
// }));

const getSidebarTemplate = ({ open, brand, mobile }) => (
  <SidebarContext.Provider value={{ isSidebarOpen: open, setIsSidebarOpen: setIsSidebarOpen }}>
    <Router>
      <Sidebar open={open} showBrand={brand} isMobile={mobile} />
    </Router>
  </SidebarContext.Provider>
);

const classes = {
  shrinkSidebar: 'shrink-sidebar',
  hideSidebar: 'hide-sidebar',
};

describe('Test differente states', () => {
  it('Show, Shrink or Hide Brand name when specified', () => {
    const options = {
      open: true,
      brand: false,
      mobile: false,
    };
    const { rerender } = render(getSidebarTemplate(options)); //hidden brand
    expect(document.getElementById('brand')).toBeNull();

    options.brand = true;
    rerender(getSidebarTemplate(options)); //show Brand sidebar
    expect(document.getElementById('brand')).toBeInTheDocument();
    expect(document.getElementById('brand').text === theme.brand.fullName).toBeTruthy();

    options.open = false;
    rerender(getSidebarTemplate(options)); //shrink sidebar
    expect(document.getElementById('brand').text === theme.brand.shortName).toBeTruthy();

    options.open = true;
    options.mobile = true;
    rerender(getSidebarTemplate(options)); //open sidebar in mobile
    expect(document.getElementById('brand').text === theme.brand.fullName).toBeTruthy();
  });

  it('should expand on mobile and desktop', async () => {
    const options = {
      open: true,
      brand: true,
      mobile: true,
    };
    const { getByTestId } = render(getSidebarTemplate(options));
    const classes = await getByTestId('sidebar').className.split(' ');
    [classes.hideSidebar, classes.shrinkClass].forEach((className) => {
      expect(classes.includes(className)).toBeFalsy();
    });

    const brand = document.getElementById('brand').text;
    expect(brand === theme.brand.fullName).toBeTruthy();
  });

  it('should hide when close on mobile', async () => {
    const options = {
      open: false,
      brand: false,
      mobile: true,
    };
    const { getByTestId } = render(getSidebarTemplate(options));
    const sidebar = await getByTestId('sidebar');
    const currentClasses = sidebar.className.split(' ');
    expect(currentClasses.includes(classes.hideSidebar)).toBeTruthy();
    expect(currentClasses.includes(classes.shrinkSidebar)).toBeFalsy();
  });

  it('should shrink when close on desktop', async () => {
    const options = {
      open: false,
      brand: true,
      mobile: false,
    };
    const { findByTestId } = render(getSidebarTemplate(options));
    const currentClasses = await (await findByTestId('sidebar')).className.split(' ');
    expect(currentClasses.includes(classes.hideSidebar)).toBeFalsy();
    expect(currentClasses.includes(classes.shrinkSidebar)).toBeTruthy();
    const brand = document.getElementById('brand').text;
    expect(brand === theme.brand.shortName).toBeTruthy();
  });

  it('Should close when navlink is clicked on mobile', async () => {
    const options = {
      open: true,
      brand: false,
      mobile: true,
    };
    const { findByTestId, findByTitle } = render(getSidebarTemplate(options));
    let sidebar = await findByTestId('sidebar');
    expect(sidebar.className.split(' ').includes(classes.hideSidebar)).toBeFalsy();

    const homeLink = await findByTitle('Home');
    fireEvent.click(homeLink);
    expect(setIsSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('Should not close when navlink is clicked on desktop', async () => {
    const options = {
      open: true,
      brand: false,
      mobile: false,
    };
    const { findByTestId, findByTitle } = render(getSidebarTemplate(options));
    const homeLink = await findByTitle('Home');
    let sidebar = await findByTestId('sidebar');
    expect(homeLink).toBeInTheDocument();
    expect(sidebar.className.split(' ').includes(classes.shrinkSidebar)).toBeFalsy();

    fireEvent.click(homeLink);
    sidebar = await findByTestId('sidebar');
    expect(setIsSidebarOpen).not.toHaveBeenCalled();
  });
});
