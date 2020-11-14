import React, { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Backdrop from "../Backdrop";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Header from "../Header";

import PageAnimationRenderer from "../../layout/PageAnimationRenderer";

import routes from '../../conf/routes.js';

export const SidebarContext = React.createContext();

function Theme({ options }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>
        <Sidebar open={isSidebarOpen} />
        <div className="flex flex-col flex-1 w-full h-screen flex-no-wrap overflow-hidden relative">
          {isSidebarOpen && <Backdrop closeSidebar={closeSidebar} />}
          <Header />
          <main className={"flex-grow p-4 overflow-y-scroll"}>
            <Switch>
              {routes.map(({ path, Component, exact, name }) => (
                <Route exact={exact} path={path} key={name}>
                  <PageAnimationRenderer>
                    <Component />
                  </PageAnimationRenderer>
                </Route>
              ))}
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </SidebarContext.Provider>
  );
}

export default Theme;
