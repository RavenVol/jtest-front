import React, {useState, useEffect} from 'react';

import '../../styles/css/Timer.css';

/**
 * Timer component
 * @param {number} startTime // seconds
 * @param {function} zeroCB // callback when timer reaches 0
 */
const Timer = ({timerID, startTime, zeroCB}) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    setTime(startTime);
    let mytime = startTime - 1;

    const countdown = setInterval(() => {
      if (mytime <= 0) {
        clearInterval(countdown);
        zeroCB();
      }
      setTime(mytime);
      mytime--;
    }, 1000);

    return () => {
      clearInterval(countdown);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerID]);

  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time - hour * 3600) / 60);
  const second = time - hour * 3600 - minute * 60;

  return (
    <div className="timer glass glass--dark">
      {startTime >= 3600 
        ? `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`
        : `${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`
      }
    </div>
  )
}

export default Timer;