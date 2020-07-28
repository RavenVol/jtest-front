import React from 'react';
import { connect } from 'react-redux';

import { loadingLang } from '../../langs/loadingLang';

import '../../styles/css/displayableWindow.css';

const Loading = ({userLang}) => (
  <div className="loadingWindow glass glass--middle glass--mate">
    {loadingLang.loading[userLang]}
  </div>
);

function mapStateToProps(state) {
  return {
    userLang: state.userLang,
  }
}

export default connect(mapStateToProps)(Loading);