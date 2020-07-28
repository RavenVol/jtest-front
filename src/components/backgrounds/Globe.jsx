import React from 'react';

import '../../styles/css/globe.css';

const Globe = () => {
  return (
    <div className="globe">
      <div className="globe__wrapper">
        <div className="spinner spinner--1" />
        <div className="spinner spinner--2" />
        <div className="spinner spinner--3" />
        <div className="spinner spinner--4" />
        <div className="spinner spinner--5" />
        <div className="spinner spinner--0">
          <div className="spinner__circle spinner__circle--0" />
          <div className="spinner__circle spinner__circle--10" />
          <div className="spinner__circle spinner__circle--20" />
          <div className="spinner__circle spinner__circle--30" />
          <div className="spinner__circle spinner__circle--40" />
          <div className="spinner__circle spinner__circle--50" />
          <div className="spinner__circle spinner__circle--60" />
          <div className="spinner__circle spinner__circle--70" />
          <div className="spinner__circle spinner__circle--80" />
          <div className="spinner__circle spinner__circle--90" />
          <div className="spinner__circle spinner__circle--100" />
        </div>
      </div>
    </div>
  )
}

export default Globe;