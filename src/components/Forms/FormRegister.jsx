import React from 'react';
import postFormToServer from '../../data/postFormToServer';

import { loginSigninLang } from '../../langs/loginSigninLang';

import '../../styles/css/form.css';

class FormRegister extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user : {
        email: '',
        password: '',
        confirm: '',
        first_name: '',
        family_name: '',
        gender: '',
        photo_url: null,
      },
      error : {
        email: false,
        password: false,
        confirm: false,
        first_name: false,
        gender: false,
        photo_url: false,
      },
      disabled: 'disabled',
    }
  }

  controlInput = (type, value) => {
   
    const setUser = (type, value, cb = null) => {
      this.setState(prevState => ({
        user : { ...prevState.user, [type] : value }
      }), cb)
    }

    const callback = (type) => {
      const { error } = this.state;
      error[type] === true && this.checkField(type);
    }

    let newValue;

    switch (type) {
      case 'email' :
        newValue = value.trim().replace(/[^@_\-.\w\d]/gi, '');
        setUser('email', newValue, () => {callback('email')});
        break;
      case 'password' :
        value.length <= 255 && setUser('password', value, () => {callback('password')});
        break;
      case 'confirm' :
        value.length <= 255 && setUser('confirm', value, () => {callback('confirm')});
        break;
      case 'first_name' :
        newValue = value.trim().replace(/[^A-Za-zА-ЯЁІЇЄҐа-яёіїєґ'_\-\s.\d]/gi, '');
        newValue.length <= 32 && setUser('first_name', newValue, () => {callback('first_name')});
        break;
      case 'family_name' :
        newValue = value.trim().replace(/[^A-Za-zА-ЯЁІЇЄҐа-яёіїєґ'._\-\s\d]/gi, '');
        newValue.length <= 32 && setUser('family_name', newValue, () => {callback('family_name')});
        break;
      case 'gender' :
        (value === 'male' || value === 'female') && setUser('gender', value);
        break;
      case 'photo_url' :
        setUser('photo_url', value, () => this.checkField('photo_url'));
        break;
      default :
        setUser(type, value);
        break;
    }
  }

  checkField = (type) => {
    const user = this.state.user;

    const setError = (type, value) => {
      this.setState(prevState => ({
        error : { ...prevState.error, [type] : value }
      }));
    }

    switch (type) {
      case 'email' :
        // eslint-disable-next-line
        if ( !user.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) ) {
          setError('email', true);
        } else {
          setError('email', false);
        }
        break;
      case 'password' :
        if (user.password.length < 6) {
          setError('password', true);
        } else {
          setError('password', false);
        }
        break;
      case 'confirm' :
        if (user.password !== user.confirm) {
          setError('confirm', true);
        } else {
          setError('confirm', false);
        }
        break;
      case 'gender' :
        if (user.gender === '' || user.gender === 'male' || user.gender === 'female') {
          setError('gender', false);
        } else {
          setError('gender', true);
        }
        break;
      case 'photo_url' :
        if (!user.photo_url
          || user.photo_url.type === "image/png" 
          || user.photo_url.type === "image/jpeg"
          || user.photo_url.type === "image/gif"
        ) {
          setError('photo', false);
        } else {
          setError('photo', true);
        }
        break;
      case 'first_name' :
        if (user.first_name.length < 2) {
          setError('first_name', true);
        } else {
          setError('first_name', false);
        }
        break;
      default: break;
    }
  }

  checkFieldAll = () => {
    const fields = ['email', 'password', 'confirm', 'first_name', 'gender', 'photo_url'];
    Promise.all(fields.map(field => this.checkField(field)));
  }

  submitAvailable = () => {
    const {user, error, disabled} = this.state;
    if (user.email && user.password && user.confirm && user.first_name 
      && !error.email && !error.password && !error.confirm && !error.first_name
      && !error.gender && !error.photo_url) 
    {
      disabled && this.setState({ disabled: '' });
    } else {
      !disabled && this.setState({ disabled: 'disabled' });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.checkFieldAll();
    const {error} = this.state;
    if (!error.email 
      && !error.password 
      && !error.confirm 
      && !error.gender
      && !error.first_name
      && !error.photo_url)
    {
      const form = new FormData(event.target);
      form.delete("confirm");
      postFormToServer('auth/register', form)
      .then(reply => {
        if (reply.message === 'OK') {
          this.props.setRegMessage('letter_sent');
        } else if (reply.message === 'error') {
          const newError = this.state.error;

          reply.error.forEach(error => newError[error] = true);
          this.setState({
            ...this.state,
            error: newError,
          });
          alert(loginSigninLang.validation_error[this.props.userLang]);
        }
      })
      .catch(error => alert(error));
    }
  }

  componentDidUpdate() {
    this.submitAvailable();
  }

  render() {
    const { user, error } = this.state;
    const { userLang } = this.props;
    
    return (
      <form 
        id="myform"
        className="form"
        onSubmit={(event) => {this.handleSubmit(event)}}
      >
        <label className="form__label" htmlFor="reg_email">
          {loginSigninLang.email[userLang]}
        </label>
        <input
          className="form__input"
          id="reg_email"
          type="email"
          name="email"
          placeholder="example@somewhere.com"
          value={user.email}
          required
          // autoFocus
          onChange={(event) => this.controlInput("email", event.target.value)}
          onBlur={() => this.checkField('email')}
        />
        <p className="form__error">
          {error.email && loginSigninLang.wrong_email[userLang]}&nbsp;
        </p>

        <label className="form__label" htmlFor="reg_password">
          {loginSigninLang.password[userLang]}
        </label>
        <input
          className="form__input"
          id="reg_password"
          type="password"
          name="password"
          value={user.password}
          required
          onChange={(event) => this.controlInput("password", event.target.value)}
          onBlur={() => this.checkField('password')}
        />
        <p className="form__error">
          {error.password && `6 ${loginSigninLang.symbols_minimum[userLang]}`}&nbsp;
        </p>

        <label className="form__label" htmlFor="reg_confirm">
          {loginSigninLang.retype_password[userLang]}
        </label>
        <input
          className="form__input"
          id="reg_confirm"
          type="password"
          name="confirm"
          value={user.confirm}
          required
          onChange={(event) => this.controlInput("confirm", event.target.value)}
          onBlur={() => this.checkField('confirm')}
        />
        <p className="form__error">
          {error.confirm && loginSigninLang.should_be_equal_to_password[userLang]}&nbsp;
        </p>

        <label className="form__label" htmlFor="reg_first_name">
          {loginSigninLang.name[userLang]}
        </label>
        <input
          className="form__input"
          id="reg_first_name"
          type="text"
          name="first_name"
          value={user.first_name}
          required
          onChange={(event) => this.controlInput("first_name", event.target.value)}
          onBlur={() => this.checkField('first_name')}
        />
        <p className="form__error">
          {error.first_name && `2 ${loginSigninLang.symbols_minimum[userLang]}`}&nbsp;
        </p>

        <label className="form__label" htmlFor="reg_family_name">
          {loginSigninLang.family_name[userLang]}
        </label>
        <input
          className="form__input"
          id="reg_family_name"
          type="text"
          name="family_name"
          value={user.family_name}
          onChange={(event) => this.controlInput("family_name", event.target.value)}
        />
        <p className="form__error">
          {error.family_name && `2 ${loginSigninLang.symbols_minimum[userLang]}`}&nbsp;
        </p>

        <label className="form__label" htmlFor="reg_gender">
          {loginSigninLang.gender[userLang]}
        </label>
        <div id="reg_gender">
          <label className="form__label" htmlFor="reg_male">
            {loginSigninLang.male[userLang]}&nbsp;-&nbsp;
          </label>
          <input
            className="form__input"
            id="reg_male"
            type="radio"
            name="gender"
            value='male'
            onChange={(event) => this.controlInput("gender", event.target.value)}
          />

          <label className="form__label" htmlFor="reg_female">
            {loginSigninLang.female[userLang]}&nbsp;-&nbsp;
          </label>
          <input
            className="form__input"
            id="reg_female"
            type="radio"
            name="gender"
            value='female'
            onChange={(event) => this.controlInput("gender", event.target.value)}
          />
        </div>
        <p className="form__error">
          {error.gender && loginSigninLang.male_or_female[userLang]}&nbsp;
        </p>

        <label className="form__label" htmlFor="reg_photo_label">
          {loginSigninLang.photo[userLang]}
        </label>
        <label 
          className="form__fileSelector" 
          htmlFor="reg_photo" 
          id='reg_photo_label'
        >
          {user.photo_url && user.photo_url.name
            ? user.photo_url.name
            : <>
                <svg x="0" y="0" viewBox="0 0 20 17">
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                </svg>
                <span>{loginSigninLang.choose_file[userLang]}</span>
              </>
          }
        </label>
        <input
          className="form__file"
          id="reg_photo"
          type="file"
          name="photo"
          onChange={(event) => this.controlInput("photo_url", event.target.files[0])}
        />
        <p className="form__error">
          {error.photo && loginSigninLang.only_filetype_allowed[userLang]}&nbsp;
        </p>

        <button
          className={this.state.disabled 
            ? "form__button BtnColors--disabled" 
            : "form__button BtnColors--green"} 
          disabled={this.state.disabled}
          type="submit"
        >
          {loginSigninLang.submit[userLang]}
        </button>
      </form>
    )
  }
}

export default FormRegister;