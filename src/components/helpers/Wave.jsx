import React from 'react';
import '../../styles/css/Wave.css';

const Wave = ({rotate="0deg"}) => (
  <div className="wave__wrap" style={{transform: `rotateZ(${rotate})`}}>
    <div className="wave"/>
    <div className="wave wave--2"/>
    <div className="wave wave--3"/>
  </div>
);

export default Wave;