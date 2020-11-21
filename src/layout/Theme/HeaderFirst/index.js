import React from 'react';
import clsx from 'clsx';
import Header from '@Layout/Header';
import Sidebar from '@Layout/Sidebar';
import Body from '@Layout/Body';
import Footer from '@Layout/Footer';

function HeaderFirst({ options }) {
  const { isSidebarOpen, theme } = options;

  const classes = {
    layoutWrapper: clsx('flex', 'flex-col', 'relative'),
    main: clsx('flex', 'flex-1', 'w-full', 'h-screen', 'overflow-hidden')
  };
  return (
    <div className={classes.layoutWrapper}>
      <Header showBrand={true} />
      <div className={classes.main}>\
        <Sidebar open={isSidebarOpen} minWidth={theme.sidebarWith} showBrand={false} />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default HeaderFirst;
