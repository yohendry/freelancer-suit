import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Backdrop from "./layout/Backdrop";

import "./assets/css/style.css";

import theme from "./conf/theme.js";

export const SidebarContext = React.createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const themeInnerHeaderFirst =
    theme.layout === theme.CONST.THEME.LAYOUT.HEADER_FIRST ? (
      <div className="flex flex-col relative">
        <Header showBrand={true} />
        <div className="flex flex-1 w-full h-screen overflow-hidden">
          {isSidebarOpen && <Backdrop closeSidebar={closeSidebar} />}
          <Sidebar open={isSidebarOpen} minWidth={theme.sidebarWith} showBrand={false} />
          <Body />
        </div>
        <Footer />
      </div>
    ) : (
      <div className="flex">
        <Sidebar open={isSidebarOpen} minWidth={theme.sidebarWith} showBrand={true} />
        <div className="flex flex-col flex-1 w-full h-screen flex-no-wrap overflow-hidden relative">
          {isSidebarOpen && <Backdrop closeSidebar={closeSidebar} />}
          <Header showBrand={false} />
          <Body />
          <Footer />
        </div>
      </div>
    );

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>{themeInnerHeaderFirst}</Router>
    </SidebarContext.Provider>
  );
}

export default App;
