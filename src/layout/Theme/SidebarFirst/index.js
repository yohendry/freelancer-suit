import React from 'react';
import Header from "../../Header";
import Sidebar from "../../Sidebar";
import Body from "../../Body";
import Footer from "../../Footer";

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