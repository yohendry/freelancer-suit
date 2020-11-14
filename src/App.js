import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderFirst from './layout/Theme/HeaderFirst';
import SidebarFirst from './layout/Theme/SidebarFirst';
import './assets/css/style.css';

import theme from './conf/theme.js';

export const SidebarContext = React.createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  const options = {
    closeSidebar,
    isSidebarOpen,
    theme,
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>
        {theme.layout === theme.CONST.THEME.LAYOUT.HEADER_FIRST ? (
          <HeaderFirst options={options} />
        ) : (
          <SidebarFirst options={options} />
        )}
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
