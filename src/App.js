import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderFirst from '@Layout/Theme/HeaderFirst';
import SidebarFirst from '@Layout/Theme/SidebarFirst';
import theme from '@Conf/theme.js';
import '@Assets/css/style.css';

export const SidebarContext = React.createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const closeSidebar = () => setIsSidebarOpen(false);
  

  const getLayout = (layout) => {
    const options = {
      closeSidebar,
      isSidebarOpen,
      theme,
    };

    return layout === theme.CONST.THEME.LAYOUT.HEADER_FIRST ? (
      <HeaderFirst options={options} />
    ) : (
      <SidebarFirst options={options} />
    );
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <Router>
        {getLayout(theme.layout)}
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
