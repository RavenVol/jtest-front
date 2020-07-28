import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import { home3, test, createTest, instruction } from '../../misc/svgImages';
import LanguageBar from './LanguageBar';
import SearchBar from '../helpers/SearchBar';
import { mainMenuLang } from '../../langs/menuLang';

import '../../styles/css/mainMenu.css';

const MainMenu = ({menuControl, userLang}) => {
  return (
    <div className="mainMenu">
      <div className="mainMenu__inscription windowTitle windowTitle--left">
        {mainMenuLang.title[userLang]}
      </div>

      <LanguageBar />
      
      <ul className="mainMenu__buttonsList">
        <li onClick={(event) => menuControl(event)}>
          <Link to='/' className="mainMenu__button menuBtn menuBtn--left glass glass--dark">
            <svg
              x="0px" y="0px" viewBox="0 0 1000 1000"
            >
              {home3}
            </svg>
            <p>{mainMenuLang.home[userLang]}</p>
          </Link>
        </li>
        <li  onClick={(event) => menuControl(event)}>
          <Link to='/tests' className="mainMenu__button menuBtn menuBtn--left glass glass--dark">
            <svg
              x="0px" y="0px" viewBox="0 0 1000 1000"
            >
              {test}
            </svg>
            <p>{mainMenuLang.tests[userLang]}</p>
          </Link>
        </li>
        <li  onClick={(event) => menuControl(event)}>
          <Link to='/createtest'  className="mainMenu__button menuBtn menuBtn--left glass glass--dark">
            <svg
              x="0px" y="0px" viewBox="0 0 1000 1000"
            >
              {createTest}
            </svg>
            <p>{mainMenuLang.create_test[userLang]}</p>
          </Link>
        </li>
        {/* <li  onClick={(event) => menuControl(event)}>
          <Link to='instructions' className="mainMenu__button menuBtn menuBtn--left glass glass--dark">
            <svg
              x="0px" y="0px" viewBox="0 0 1000 1000"
            >
              {instruction}
            </svg>
            <p>{mainMenuLang.instructions[userLang]}</p>
          </Link>
        </li> */}
      </ul>

      <div>
        <SearchBar size="small" color="dark" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
})

export default connect(mapStateToProps)(MainMenu);