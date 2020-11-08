import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import Backdrop from "./layout/Backdrop";

import routes from './conf/routes.js';
import './assets/css/style.css';
import PageAnimationRenderer from "./layout/PageAnimationRenderer";

export const SidebarContext = React.createContext();

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
      <Router>
        <Sidebar open={isSidebarOpen}/>
        <div className="flex flex-col flex-1 w-full h-screen flex-no-wrap overflow-hidden relative">
          {isSidebarOpen && <Backdrop closeSidebar={closeSidebar} />}
          <Header />
          <main className={"flex-grow p-4 overflow-y-scroll"} >
            <Switch>
              {routes.map(({path, Component, exact, name}) => (
                <Route exact={exact} path={path} key={name}>
                  <PageAnimationRenderer>
                    <Component />
                  </PageAnimationRenderer>
                </Route>
              ))}
            </Switch>
          </main>
          <footer className="text-sm text-right">
            Yohendry Hurtado & Roberto Duran - 2020
          </footer>
        </div>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
