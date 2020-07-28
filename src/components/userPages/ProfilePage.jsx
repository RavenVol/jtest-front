import React from 'react';
import { connect } from 'react-redux';

const ProfilePage = () => {
  return (
    <div className="profilePage">
      
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
  user : state.user,
});

export default connect(mapStateToProps)(ProfilePage);