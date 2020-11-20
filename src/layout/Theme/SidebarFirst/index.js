import React from 'react';
import Header from "@Layout/Header";
import Sidebar from "@Layout/Sidebar";
import Body from "@Layout/Body";
import Footer from "@Layout/Footer";

function SidebarFirst({ options }) {
  const { isSidebarOpen, theme } = options;
  return (
    <div className="flex relative">
      <Sidebar open={isSidebarOpen} minWidth={theme.sidebarWith} showBrand={true} />
      <div className="flex flex-col flex-1 w-full h-screen overflow-hidden">
        <Header showBrand={false} />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default SidebarFirst;