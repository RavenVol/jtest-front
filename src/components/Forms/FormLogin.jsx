import React from 'react';
import {useState} from 'react';

import postFormToServer from '../../data/postFormToServer';
import { loginSigninLang } from '../../langs/loginSigninLang';

import '../../styles/css/form.css';

const FormLogin = ({loadUser, userLang}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({email: false, password: false});

  const controlInput = (type, value) => {
    let newValue;
    switch (type) {
      case 'email' :
        newValue = value.replace(/[^@_\-.\w\d]/gi, '');
        setEmail(newValue);
        if (!newValue.includes('@') || !newValue.includes('.')) {
          setError({...error, email: true});
        } else {
          setError({...error, email: false});
        }
        break;
      case 'password' :
        setPassword(value);
        if (value.length < 6) {
          setError({...error, password: true});
        } else {
          setError({...error, password: false});
        }
        break;
      default : break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password.length >= 6 
    // eslint-disable-next-line
    && email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) 
    {
      const form = new FormData(event.target);
      postFormToServer('auth/login', form)
      .then(reply => {
        if (reply.message === 'OK') {
          localStorage.setItem('token', reply.user.token);
          loadUser({
            token: reply.user.token,
            email: reply.user.email,
            first_name: reply.user.first_name,
            family_name: reply.user.family_name,
            gender: reply.user.gender,
            photo_url: reply.user.photo_url,
          });
        } else {
          alert(loginSigninLang[reply.message][userLang]);
        }
      })
      .catch(error => alert(error));
    }
  }

  return (
    <form 
      className="form"
      onSubmit={(event) => {handleSubmit(event)}}
    >
      <label className="form__label" htmlFor="email">
        {loginSigninLang.email[userLang]}
      </label>
      <input
        className="form__input"
        id="email"
        type="email"
        name="email"
        placeholder="example@somewhere.com"
        value={email}
        required
        // autoFocus
        onChange={(event) => controlInput("email", event.target.value)}
      />
      <p className="form__error">
        {error.email && "Wrong e-mail address"}&nbsp;
      </p>

      <label className="form__label" htmlFor="password">
        {loginSigninLang.password[userLang]}
      </label>
      <input
        className="form__input"
        id="password"
        type="password"
        name="password"
        value={password}
        required
        onChange={(event) => controlInput("password", event.target.value)}
      />
      <p className="form__error">
        {error.password && "6 symbols minimum"}&nbsp;
      </p>

      <button 
        className={!email || !password || error.email || error.password 
          ? "form__button BtnColors--disabled" 
          : "form__button BtnColors--green"} 
        disabled={!email || !password || error.email || error.password}
        type="submit"
      >
        {loginSigninLang.login[userLang]}
      </button>
    </form>
  )
}

export default FormLogin;