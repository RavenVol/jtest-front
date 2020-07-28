import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import { loadUser, setUserLang } from '../actions/actionCreators';

import Header from './header/Header';
import HomePage from './homePage/HomePage';
import TestsPage from './testsPage/TestsPage.jsx';
import CreateTestPage from './TestCreate/CreateTestPage';
import ShowTest from './testsPage/ShowTest';
import ShowQuestion from './testsPage/ShowQuestion';
import ShowTestResult from './testResults/ShowTestResult';
import SearchPage from './SearchPage/SearchPage';
import postFormToServer from '../data/postFormToServer';
import MyTests from './userPages/MyTests';
import MyResults from './userPages/MyResults';
import ConfirmitionPage from './userPages/ConfirmitionPage';
import MyUsers from './userPages/MyUsers';
import FriendsTests from './userPages/FriendsTests';

import '../styles/css/reset.css';
import '../styles/css/App.css';
import '../styles/css/global.css';

const App = ({loadUser, user, setUserLang}) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userLang = localStorage.getItem('userLang');
    if (userLang) setUserLang(userLang);

    if (token && !user.token) {
      const form = new FormData();
      form.append('auth_token', token);
      postFormToServer('auth/jwt', form)
      .then(reply => {
        loadUser({
          token: token,
          ...reply.user,
          email: reply.user.emails[0],
        });
      })
      .catch(error => alert(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route exact path='/home' component={ HomePage } />
        <Route exact path='/tests' component={ TestsPage } />
        <Route exact path='/test' component={ TestsPage } />
        <Route exact path='/mytests' component={ MyTests } />
        <Route exact path='/createtest' component={ CreateTestPage } />
        <Route exact path='/test:t_id' component={ ShowTest } />
        <Route exact path='/test:testing_id/:testLang/:q_number' component={ ShowQuestion } />
        <Route exact path='/result:testing_id' component={ ShowTestResult } />
        <Route exact path='/myresults' component={ MyResults } />
        <Route exact path='/search:searchQuery' component={ SearchPage } />
        <Route exact path='/confirm:secret' component={ ConfirmitionPage } />
        <Route exact path='/usersresults' component={ MyUsers } />
        <Route exact path='/friendstests' component={ FriendsTests } />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadUser,
    setUserLang,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
