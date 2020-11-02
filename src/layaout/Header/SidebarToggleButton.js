import React, { useContext } from 'react';
import { SidebarContext } from '../../App';

function SidebarToggleButton({className, children}, ref) {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <button
      className={className}
      aria-label="Menu"
      onClick={toggleSidebar}
    >
      {children}
    </button>
  );
}

export default SidebarToggleButton;
