import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {searchBarLang} from '../../langs/searchLang';
import { magnifier } from '../../misc/svgImages';
import '../../styles/css/SearchBar.css';

const SearchBar = ({ size='big', color='light', initialValue='', userLang }) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  return (
    <div className={`searchBar searchBar--${size} glass glass--${color}`}>
      <input 
        className={`searchBar__input searchBar__input--${size}`} 
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <Link 
        to={`/search${searchQuery.trim()}`}
        className={`searchBar__btn searchBar__btn--${size} BtnColors--blue`}
      >
        <svg x="0px" y="0px" viewBox="0 0 1000 1000">
          {magnifier}
        </svg>
        <p>{searchBarLang.search[userLang]}</p>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
});

export default connect(mapStateToProps)(SearchBar);