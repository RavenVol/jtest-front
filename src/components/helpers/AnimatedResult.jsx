import React, {useState} from 'react';

import '../../styles/css/AnimatedResult.css';

const AnimatedResult = ({result}) => {
  const [shownResult, setShownResult] = useState(0);

  if (shownResult < result) {
    setTimeout(() => {
      setShownResult(shownResult + 33);
    }, 1);
  }

  if (shownResult > result) {
    setShownResult(result);
  }

  const integer_part = Math.floor(shownResult / 100);
  const fractional_part = shownResult % 100;
  const size = (integer_part + 100) / 1351 * window.innerWidth;
  const color_green = integer_part*5 > 255 ? 255 : integer_part*5;
  const color_red = color_green >= 255 ? 255-(integer_part*5 - 255) : 255;
  const color = `rgb(${color_red}, ${color_green}, 0)`
  
  return (
    <div className="animatedResult">
      <p 
        className="animatedResult__integer"
        style={{fontSize: `${size}px`, color: `${color}`}}
      >
        {integer_part < 10 ? `${integer_part}` : `${integer_part}`}
      </p>
      <p 
        className="animatedResult__fractional"
        style={{fontSize: `${size * 0.7}px`, color: `${color}`}}
      >
        {fractional_part < 10 ? `.0${fractional_part}` : `.${fractional_part}`}
      </p>
    </div>
  )
}

export default AnimatedResult;