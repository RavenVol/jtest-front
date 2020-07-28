import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../actions/actionCreators';
import { userMenuLang } from '../../langs/menuLang';
import '../../styles/css/UserMenu.css';

const UserMenu = ({userLang, logoutUser, menuControl}) => {
  return (
    <div className="userMenu">
      <div className="userMenu__title windowTitle windowTitle--right">
        {userMenuLang.title[userLang]}
      </div>

      <ul className="userMenu__buttonsList">
        {/* <li onClick={() => menuControl()}>
          <Link to='/' className="userMenu__menuBtn menuBtn menuBtn--right glass glass--dark">
            {userMenuLang.my_profile[userLang]}
          </Link>
        </li> */}
        <li onClick={() => menuControl()}>
          <Link to='/myresults' className="userMenu__menuBtn menuBtn menuBtn--right glass glass--dark">
            {userMenuLang.my_results[userLang]}
          </Link>
        </li>
        <li onClick={() => menuControl()}>
          <Link to='/mytests' className="userMenu__menuBtn menuBtn menuBtn--right glass glass--dark">
            {userMenuLang.my_tests[userLang]}
          </Link>
        </li>
        <li onClick={() => menuControl()}>
          <Link to='/usersresults' className="userMenu__menuBtn menuBtn menuBtn--right glass glass--dark">
            {userMenuLang.users_results[userLang]}
          </Link>
        </li>
        <li onClick={() => menuControl()}>
          <Link to='/friendstests' className="userMenu__menuBtn menuBtn menuBtn--right glass glass--dark">
            {userMenuLang.friends_tests[userLang]}
          </Link>
        </li>
      </ul>
      
      <div className="userMenu__bottom">
        <Link 
          to='/'
          className="controlBtn BtnColors--blue"
          onClick={() => {logoutUser(); menuControl()}}
        >
          {userMenuLang.logout[userLang]}
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
});

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserMenu);