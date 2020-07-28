import React from 'react';
import { connect } from 'react-redux';

import LogInBar from './LogInBar';
import UserMenu from './UserMenu';
import createDisplayUser from '../../misc/createDisplayUser';

import '../../styles/css/UserBar.css';

const UserInfoBar = ({user, menuControl}) => {
  const displayUser = createDisplayUser(user);

  return (
    <div className="userBar">
      <div className="user">
        <div className={user && user.email ? "user__image user__image--auth" : "user__image"}>
          {user && user.photo_url 
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
        </div>

        <div className="user__name">
          <p>{displayUser.first_name}</p>
          <p>{displayUser.family_name}</p>
        </div>
      </div>

      <hr />

      {!user || !user.email
        ? <LogInBar />
        : <UserMenu menuControl={menuControl} />
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserInfoBar);