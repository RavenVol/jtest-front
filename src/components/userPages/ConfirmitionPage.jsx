import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadUser } from '../../actions/actionCreators';
import postFormToServer from '../../data/postFormToServer';
import Wave from '../helpers/Wave';
import Footer from '../footer/Footer';

import { confirmPage } from '../../langs/userPagesLang';

const ConfirmitionPage = ({match, history, user, userLang, loadUser}) => {
  const [message, setMessage] = useState();
  
  useEffect(() => {
    if (message === 'success') {
      setTimeout(() => {history.push('/')}, 10000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    const form = new FormData();
    form.append('secret', match.params.secret);
    postFormToServer('auth/confirm', form)
    .then(reply => {
      if (reply.message === 'OK') {
        localStorage.setItem('token', reply.token);
        const form = new FormData();
        form.append('auth_token', reply.token);
        postFormToServer('auth/jwt', form)
        .then(reply => {
          loadUser({
            token: reply.user.token,
            email: reply.user.emails[0],
            first_name: reply.user.first_name,
            family_name: reply.user.family_name,
            gender: reply.user.gender,
            photo_url: reply.user.photo_url,
          });
        })
        .catch(error => alert(error));
        
        setMessage('success');
      } else {
        setMessage(reply.message);
      }
    })
    .catch(error => alert(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.secret])

  return (
    <div className="myPage">
      <header className="myPage__header">
        <Wave rotate="180deg"/>
      </header>

      <main className="myPage__main myPageMain glass glass--light">
        <div className="myPageMain__title">
          <h2 className="windowTitle">{confirmPage.title[userLang]}</h2>
        </div>

        {message 
        && <div className="myPageMain__message">
          {confirmPage[message][userLang]}  
        </div>}
      </main>

      <footer className="myPage__footer">
        <Footer />
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
  user : state.user,
});

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadUser,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ConfirmitionPage);