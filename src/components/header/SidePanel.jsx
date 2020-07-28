import React from 'react';

import '../../styles/css/sidePanel.css';

const SidePanel = ({panelActive, panelPosition, children}) => {
  return (
    <div 
      className={`sidePanel sidePanel--${panelPosition} glass glass--middle glass--mate`}
      style={panelActive 
        ? {}
        : panelPosition === 'left'
          ? {left: "-270px"}
          : {right: "-270px"}
      }
    >
      {children}
    </div>
  )
}

export default SidePanel;