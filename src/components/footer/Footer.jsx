import React from 'react';

import Wave from '../helpers/Wave';

import '../../styles/css/Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer__waveWrap">
      <Wave />
    </div>
    <div className="footer__credits colorSchema--dark">
      <p>&copy;2020</p>
      <p>created by: Alexander Volianiuk</p>
    </div>
  </div>
)

export default Footer;