import React from 'react';
import {gear1, gear2, gear3, gear4} from '../../misc/svgImages';

import '../../styles/css/gear.css';

const RotatingGears = () => (
  <div className="gear">
    <div className="gear1">
      <svg
        x="0px" y="0px" viewBox="0 0 1000 1000"
      >
        {gear1}
      </svg>
    </div>
    <div className="gear2">
      <svg
        x="0px" y="0px" viewBox="0 0 1000 1000"
      >
        {gear2}
      </svg>
    </div>
    <div className="gear3">
      <svg
        x="0px" y="0px" viewBox="0 0 1000 1000"
      >
        {gear3}
      </svg>
    </div>
    <div className="gear4">
      <svg
        x="0px" y="0px" viewBox="0 0 1000 1000"
      >
        {gear4}
      </svg>
    </div>
  </div>
)

export default RotatingGears;