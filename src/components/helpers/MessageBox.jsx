import React from 'react';
import '../../styles/css/displayableWindow.css';

const MessageBox = ({children}) => (
  <div className="messageBox glass glass--middle glass--mate">
    {children}
  </div>
);

export default MessageBox;