import React from 'react';
import Header from '@Layout/Header';
import Sidebar from '@Layout/Sidebar';
import Body from '@Layout/Body';
import Footer from '@Layout/Footer';
import Backdrop from '@Layout/Backdrop';

function HeaderFirst({ options }) {
  const { isSidebarOpen, closeSidebar, theme } = options;
  return (
    <div className="flex flex-col relative">
      <Header showBrand={true} />
      <div className="flex flex-1 w-full h-screen overflow-hidden">
        {isSidebarOpen && <Backdrop closeSidebar={closeSidebar} />}
        <Sidebar open={isSidebarOpen} minWidth={theme.sidebarWith} showBrand={false} />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default HeaderFirst;
