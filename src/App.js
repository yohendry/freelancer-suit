import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StyleGuide from "./pages/StyleGuide/";
import Header from "./layaout/Header";
import Sidebar from "./layaout/Sidebar";
import Backdrop from "./layaout/Backdrop";
import NotFound from "./pages/NotFound";
import './assets/css/style.css';

export const SidebarContext = React.createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
      <Router>
        <Sidebar open={isSidebarOpen}/>
        <div className="flex flex-col flex-1 w-full h-screen flex-no-wrap overflow-hidden relative">
          {isSidebarOpen && <Backdrop />}
          <Header />
          <main className="flex-grow p-4 overflow-y-scroll">
            <Switch>
              <Route exact path="/styleguide" >
                <StyleGuide />
              </Route>
              <Route exact path="/" >
                Home
              </Route>
              <Route component={NotFound} />
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
