import React, {useState} from 'react';
import { connect } from 'react-redux';

import { logo2, menu} from '../../misc/svgImages';
import createDisplayUser from '../../misc/createDisplayUser';
import SidePanel from './SidePanel';
import UserInfoBar from './UserInfoBar';
import MainMenu from './MainMenu';

import '../../styles/css/Header.css';

const Header = ({user, logoPosition}) => {
  const [showMainMenu, setShowMainMenu] = useState({mainMenuActive: false, mainMenuExist: false});
  const [showUserBar, setShowUserBar] = useState({userBarActive: false, userBarExist: false});
  const displayUser = createDisplayUser(user);

  const controlMainMenu = (event) => {
    if (event) event.preventDefault();

    if (showUserBar.userBarExist) {
      setShowUserBar({userBarActive: false, userBarExist: true});
      setTimeout(()=> {setShowUserBar({userBarActive: false, userBarExist: false})}, 200);
    }

    const {mainMenuActive, mainMenuExist} = showMainMenu;
    if (mainMenuExist) {
      setTimeout(()=> {setShowMainMenu({mainMenuActive: false, mainMenuExist: false})}, 200);
    }
    
    setShowMainMenu({mainMenuActive: !mainMenuActive, mainMenuExist: true});
  }

  const controlUserBar = (event) => {
    if (event) event.preventDefault();

    if (showMainMenu.mainMenuExist) {
      setShowMainMenu({mainMenuActive: false, mainMenuExist: true});
      setTimeout(() => {setShowMainMenu({mainMenuActive: false, mainMenuExist: false})}, 200);
    }

    const {userBarActive, userBarExist} = showUserBar;
    if (userBarExist) {
      setTimeout(()=> {setShowUserBar({userBarActive: false, userBarExist: false})}, 200);
    }

    setShowUserBar({userBarActive: !userBarActive, userBarExist: true});
  }

  return (
    <div className="header">
      <div className="header__mainMenu">
        <button 
          className="headerButton glass glass--middle glass--mate"
          onClick={(event) => controlMainMenu(event)}
        >
          <svg
            x="0px" y="0px" viewBox="0 0 1000 1000"
          >
            {menu}
          </svg>
        </button>
      </div>

      <div className={`header__logo header__logo--${logoPosition}`}>
        <button className="headerButton glass glass--middle glass--mate">
          <svg
            x="0px" y="0px" viewBox="0 0 1000 1000"
          >
            {logo2}
          </svg>
          <span className="title">jTest!</span>
        </button>
      </div>

      <div className="header__user">
        <button 
          className="headerButton headerButton--user glass glass--middle glass--mate"
          onClick={(event) => controlUserBar(event)}
        >
          {user && user.email && user.photo_url
            ? <img 
                src={displayUser.photo_url} 
                alt={`${displayUser.first_name} ${displayUser.family_name}`}
              />
            : <svg
                x="0px" y="0px" viewBox="0 0 1000 1000"
              >
                {displayUser.photo_url}
              </svg>
          }
        </button>
      </div>

      {showMainMenu.mainMenuExist 
      &&  <SidePanel 
            panelActive={showMainMenu.mainMenuActive}
            panelPosition='left'
          >
            <MainMenu menuControl={controlMainMenu}/>
          </SidePanel>}
      {showUserBar.userBarExist 
      && <SidePanel
            panelActive={showUserBar.userBarActive}
            panelPosition='right'
         >
            <UserInfoBar menuControl={controlUserBar}/>
         </SidePanel>}
         
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  logoPosition: state.logoPosition,
})

export default connect(mapStateToProps)(Header);