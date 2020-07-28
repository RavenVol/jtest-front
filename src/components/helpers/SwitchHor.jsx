import React, {useState} from 'react';
import { connect } from 'react-redux';

import { switchHorLang } from '../../langs/switchHorLang';
import '../../styles/css/switchHor.css';

const SwitchHor = ({left, right, defaultPosition, cb, userLang}) => {
  const [switchState, setSwitchState] = useState(defaultPosition);
  
  const handleSwitch = () => {
    if (switchState === left) {
      setSwitchState(right);
      cb(right);
    } else {
      setSwitchState(left);
      cb(left);
    }
  }

  return (
    <div className="switch">
      <label
        className={switchState === left ? "switch__label switch__label--active" : "switch__label"}
        htmlFor="left"
        onClick={() => handleSwitch()}
      >
        {switchHorLang[left][userLang]}
      </label>
      <input 
        className="switch__radio"
        type="radio"
        id="left"
        name="switch"
        onChange={() => handleSwitch()}
        checked={switchState === left}
      />

      <div 
        className="switch__button"
        onClick={() => handleSwitch()}
      >
        <div className={`switch__circle switch__circle--${switchState === left ? "left" : "right"}`} />
      </div>

      <input 
        className="switch__radio"
        type="radio"
        id="right"
        name="switch"
        onChange={() => handleSwitch()}
        checked={switchState === right}
      />
      <label
        className={switchState === right ? "switch__label switch__label--active" : "switch__label"}
        htmlFor="right"
        onClick={() => handleSwitch()}
      >
        {switchHorLang[right][userLang]}
      </label>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userLang : state.userLang,
});

export default connect(mapStateToProps)(SwitchHor);