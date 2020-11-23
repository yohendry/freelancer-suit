import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, getByTitle, screen } from '@testing-library/react';
// Subject Under Test
import Sidebar, { SidebarContext } from './index.js';

const setIsSidebarOpen = jest.fn();
const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial) => [initial, mockSetState],
}));

const getSidebarTemplate = ({ open, brand, mobile }) => (
  <SidebarContext.Provider value={{ isSidebarOpen: open, setIsSidebarOpen: setIsSidebarOpen }}>
    <Router>
      <Sidebar open={open} showBrand={brand} isMobile={mobile} />
    </Router>
  </SidebarContext.Provider>
);

describe('Test differente states', () => {
  it('Show or Hide Brand name when specified', () => {
    const options = {
      open: true,
      brand: false,
      mobile: false,
    };
    const { rerender } = render(getSidebarTemplate(options));
    expect(document.getElementById('brand')).toBeNull();

    options.brand = true;
    rerender(getSidebarTemplate(options));
    expect(document.getElementById('brand')).toBeInTheDocument();
  });

  it('should expand on mobile and desktop', () => {
    const options = {
      open: true,
      brand: false,
      mobile: true,
    };
    render(getSidebarTemplate(options));
    const classes = document.getElementById('sidebar').classList;
    expect(classes.contains('hide-sidebar')).toBeFalsy();
    expect(classes.contains('shrink-sidebar')).toBeFalsy();
  });

  it('should hide when close on mobile', () => {
    const options = {
      open: false,
      brand: false,
      mobile: true,
    };
    render(getSidebarTemplate(options));
    const classes = document.getElementById('sidebar').classList;
    expect(classes.contains('hide-sidebar')).toBeTruthy();
    expect(classes.contains('shrink-sidebar')).toBeFalsy();
  });

  it('should shrink when close on desktop', () => {
    const options = {
      open: false,
      brand: false,
      mobile: false,
    };
    render(getSidebarTemplate(options));
    const classes = document.getElementById('sidebar').classList;
    expect(classes.contains('shrink-sidebar')).toBeTruthy();
    expect(classes.contains('hide-sidebar')).toBeFalsy();
  });

  it('Should close when navlink is clicked on mobile', async () => {
    const options = {
      open: true,
      brand: false,
      mobile: true,
    };
    render(getSidebarTemplate(options));
    const homeLink = await screen.findByTitle('Home');
    let sidebar = await screen.findByTitle('sidebar');
    expect(homeLink).toBeInTheDocument();
    expect(sidebar.className.split(' ').includes('hide-sidebar')).toBeFalsy();

    fireEvent.click(homeLink);
    expect(setIsSidebarOpen).toHaveBeenCalledWith(false);
  });

  it('Should not close when navlink is clicked on desktop', async () => {
    const options = {
      open: true,
      brand: false,
      mobile: false,
    };
    render(getSidebarTemplate(options));
    const homeLink = await screen.findByTitle('Home');
    let sidebar = await screen.findByTitle('sidebar');
    expect(homeLink).toBeInTheDocument();
    expect(sidebar.className.split(' ').includes('hide-sidebar')).toBeFalsy();

    fireEvent.click(homeLink);
    expect(setIsSidebarOpen).not.toHaveBeenCalled();
  });
});
