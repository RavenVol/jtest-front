import React, {useState, useEffect} from 'react';

import '../../styles/css/StatisticsBar.css';

const StatisticsBar = ({type='row', preambula, postambula, initialSize, invertSize=false, color, title, scale=1}) => {
  const [size, setSize] = useState('0%');
  useEffect(() => {
    let newSize = initialSize;
    if (invertSize) {
      newSize = 100 - initialSize;
    }
    setTimeout(() => {setSize(`${newSize * scale}%`)}, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSize]);

  const barStyle = () => {
    const style = {
      boxSizing: 'border-box',
      border: `2px outset white`,
      backgroundColor: `${color}`,
      transition: '1000ms ease-in-out',
    }

    if (type === 'row') {
      style.width = size;
      style.height = '25px';
      style.borderRadius =  '0 12px 12px 0';
      style.boxShadow = '0 0 4px 2px #ffffff80';
    }

    if (type === 'column') {
      style.maxWidth = '30px';
      style.width = '100%';
      style.height = size;
      style.borderRadius =  '12px 12px 0 0';
    }

    return style;
  }

  return (
    <div className={`statBar statBar__${type} statBar__${type}--${preambula && postambula ? 'prepost' : preambula ? 'pre' : postambula ? 'post' : 'none'}`}>
      {type === 'row' && <div className="statBar__pre">{preambula}</div>}
      {(type === 'column' && preambula) && <div className="statBar__pre">{preambula}</div>}
      
      <div style={barStyle()} title={title} />

      {type === 'row' && <div className="statBar__post">{postambula}</div>}
      {(type === 'column' && postambula) && <div className="statBar__post">{postambula}</div>}
    </div>
  );
}

export default StatisticsBar;