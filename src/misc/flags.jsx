import React from 'react';

import '../styles/css/flags.css';

const BicolorFlag = ({color1, color2}) => (
  <div className='flag'>
    <div style={{width: '100%', height: '50%', backgroundColor: `${color1}`}}/>
    <div style={{width: '100%', height: '50%', backgroundColor: `${color2}`}}/>
  </div>
);

const TricolorFlag = ({color1, color2, color3}) => (
  <div className='flag'>
    <div style={{width: '100%', height: '33.33%', backgroundColor: `${color1}`}}/>
    <div style={{width: '100%', height: '33.33%', backgroundColor: `${color2}`}}/>
    <div style={{width: '100%', height: '33.33%', backgroundColor: `${color3}`}}/>
  </div>
)

const TricolorVertFlag = ({color1, color2, color3}) => (
  <div className='flag flag--vert'>
    <div style={{width: '33.33%', height: '100%', backgroundColor: `${color1}`}}/>
    <div style={{width: '33.33%', height: '100%', backgroundColor: `${color2}`}}/>
    <div style={{width: '33.33%', height: '100%', backgroundColor: `${color3}`}}/>
  </div>
)

const GBflag = () => (
  <div className='flag' style={{position: 'relative', backgroundColor: 'blue'}}>
    <div style={{ width: '100%', height: '15%', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%) rotateZ(35deg)', backgroundColor: 'white'}}/>
    <div style={{ width: '100%', height: '15%', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%) rotateZ(-35deg)', backgroundColor: 'white'}}/>
    <div style={{ width: '100%', height: '7%', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%) rotateZ(35deg)', backgroundColor: 'red'}}/>
    <div style={{ width: '100%', height: '7%', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%) rotateZ(-35deg)', backgroundColor: 'red'}}/>
    <div style={{ width: '100%', height: '20%', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', backgroundColor: 'white'}}/>
    <div style={{ width: '25%', height: '100%', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white'}}/>
    <div style={{ width: '100%', height: '12%', position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', backgroundColor: 'red'}}/>
    <div style={{ width: '14%', height: '100%', position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'red'}}/>
  </div>
)

const flags = {
  be: <TricolorFlag color1='red' color2='red' color3='green' />,
  de: <TricolorFlag color1='black' color2='red' color3='yellow' />,
  en: <GBflag />,
  es: <TricolorFlag color1='red' color2='yellow' color3='red' />,
  fr: <TricolorVertFlag color1='blue' color2='white' color3='red' />,
  it: <TricolorVertFlag color1='green' color2='white' color3='red' />,
  pl: <BicolorFlag color1='white' color2='red' />,
  ua: <BicolorFlag color1='blue' color2='yellow' />,
  ru: <TricolorFlag color1='white' color2='blue' color3='red' />,
}

export default flags;