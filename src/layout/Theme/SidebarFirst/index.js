import React from 'react';
import clsx from 'clsx';
import Header from "@Layout/Header";
import Sidebar from "@Layout/Sidebar";
import Body from "@Layout/Body";
import Footer from "@Layout/Footer";
import useWindowSize from '@Hooks/useWindowSize';

function SidebarFirst({ options }) {
  const { isSidebarOpen } = options;
  const { isMobile } = useWindowSize();

  const classes = {
    layoutWrapper: clsx('flex', 'relative'),
    main: clsx('flex', 'flex-col', 'flex-1', 'w-full', 'h-screen', 'overflow-hidden')
  };
  return (
    <div className={classes.layoutWrapper}>
      <Sidebar open={isSidebarOpen} isMobile={isMobile} showBrand={true} />
      <div className={classes.main}>
        <Header showBrand={false} />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default SidebarFirst;