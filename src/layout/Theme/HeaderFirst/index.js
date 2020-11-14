import React from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Body from '../../Body';
import Footer from '../../Footer';
import Backdrop from '../../Backdrop';

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
