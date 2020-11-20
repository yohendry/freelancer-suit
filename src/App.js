import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderFirst from '@Layout/Theme/HeaderFirst';
import SidebarFirst from '@Layout/Theme/SidebarFirst';
import '@Assets/css/style.css';
import theme from '@Conf/theme.js';

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
