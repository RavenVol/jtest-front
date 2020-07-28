import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { loginSigninLang } from '../../langs/loginSigninLang';

import { google, twitter, facebook, linkedin, github } from '../../misc/svgImages';
import '../../styles/css/SignInProvidersList.css';

import { API_URL } from '../../misc/conf';

const SvgPrep = ({provider}) => {
  switch (provider) {
    case 'google' : return google;
    case 'twitter' : return twitter;
    case 'facebook' : return facebook;
    case 'linkedin' : return linkedin;
    case 'github' : return github;
    default : return null;
  }
}

const providers = [
  {name: 'Google+', link: 'google'}, 
  {name: 'Twitter', link: 'twitter'},
  {name: 'FaceBook', link: 'facebook'},
  {name: 'LinkedIn', link: 'linkedin'},
  {name: 'GitHub', link: 'github'},
];

const SignInProvidersList = ({loadUser, userLang}) => {
  const [disable, setDisable] = useState('');
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const socket = io(API_URL);
    socket.on('user', (user) => {
      if (popup) {
        popup.close();
      }

      socket.close();
      localStorage.setItem('token', user.token);
      loadUser({
        token: user.token,
        email: user.emails[0],
        first_name: user.first_name,
        family_name: user.family_name,
        gender: user.gender,
        photo_url: user.photo_url,
      });
    });

    return (() => socket.close())
  });

  const openPopup = (provider) => {
    const width = 500;
    const height = 500;
    const left = (window.screen.availWidth / 2)-(width / 2);
    const top = (window.screen.availHeight / 2)-(height / 2);

    const url = `${API_URL}/api/auth/${provider}`;

    return window.open(url, '', 
    `toolbar=no, location=no, directories=no, status=no, menubar=no, 
    scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
    height=${height}, centerscreen=yes, top=${top}, left=${left}`);
  }

  const checkPopup = () => {
    const checker = setInterval(() => {
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(checker);
        setDisable('');
      }
    }, 1000);
  }

  const startAuth = (provider) => {
    if (!disable) {
      setPopup(openPopup(provider));
      checkPopup();
      setDisable('disabled');
    }
  }

  return (
    <div className="signin">
      <p className="signin__title">{loginSigninLang.signin_with[userLang]}</p>
      <ul className="signin__list">
        {providers.map(provider => (
          <li 
            className="signin__item"
            key={provider.link}
          >
            <button
              className={`signin__link signin__link--${provider.link} ${disable}`}
              onClick={() => {provider.link === 'google' && startAuth(provider.link)}}
            >
              <svg x="0px" y="0px" viewBox="0 0 1000 1000">
                <SvgPrep provider={provider.link}/>
              </svg>
              <p>{provider.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SignInProvidersList;