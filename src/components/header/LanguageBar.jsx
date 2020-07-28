import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setUserLang } from '../../actions/actionCreators';
import { langsList } from '../../langs/langs';
import flags from '../../misc/flags';
import { arrow3 } from '../../misc/svgImages';

const LanguageBar = ({userLang, setUserLang}) => {
  const [availLangs, setAvailLangs] = useState([...langsList]);
  const [langIndex, setLangIndex] = useState(2);
  
  useEffect(() => {
    const lang = localStorage.getItem('userLang');
    if (lang && lang !== userLang) setUserLang(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const newLangIndex = availLangs.indexOf(userLang);
    
    if (newLangIndex === 0) {
      setAvailLangs([
        availLangs[availLangs.length - 2],
        availLangs[availLangs.length - 1],
        ...availLangs
      ].splice(0, availLangs.length));
      setLangIndex(newLangIndex + 2);
    } else if (newLangIndex === availLangs.length - 1) {
      setAvailLangs([
        ...availLangs,
        availLangs[0],
        availLangs[1]
      ].splice(2, availLangs.length));
      setLangIndex(newLangIndex - 2);
    } else {
      switch (newLangIndex - langIndex) {
        case 1 :
          handleLang('right');
          break;
        case -1 :
          handleLang('left');
          break;
        default : break;
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLang]);

  const handleLang = (move) => {
    const newLangsArray = [...availLangs];
    const lastLangIndex = langIndex;
    switch (move) {
      case 'left' :
        setLangIndex(langIndex - 1);
        setTimeout(() => {
          newLangsArray.unshift(newLangsArray.pop());
          setAvailLangs(newLangsArray);
          setLangIndex(lastLangIndex);
        }, 200);
        break;
      case 'right' :
        setLangIndex(langIndex + 1);
        setTimeout(() => {
          newLangsArray.push(newLangsArray.shift());
          setAvailLangs(newLangsArray);
          setLangIndex(lastLangIndex);
        }, 200);
        break;
      default : break;
    }
  }

  return (
    <div className="mainMenu__langbar langbar">
      <div 
        className="langbar__selector"
        onClick={() => handleLang('left')}
      >
        <svg
          x="0px" y="0px" viewBox="250 0 500 1000"
        >
          {arrow3}
        </svg>
      </div>

      <ul className="langbar__list glass glass--dark">
        {availLangs.map((availLang, index) => (
          <li 
            key={`${availLang}${index}`}
            className={`langbar__listItem ${availLang === userLang ? 'langbar__listItem--active' : ''}`}
            style={{left: `${(index - langIndex + 1) * 36}px`}}
            onClick={() => {localStorage.setItem('userLang', availLang); setUserLang(availLang)}}
          >
            {flags[availLang]}
            <p>{availLang}</p>
          </li>
        ))}
      </ul>

      <div 
        className="langbar__selector langbar__selector--mirrored"
        onClick={() => handleLang('right')}
      >
        <svg
          x="0px" y="0px" viewBox="250 0 500 1000"
        >
          {arrow3}
        </svg>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang: state.userLang,
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setUserLang,
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(LanguageBar);