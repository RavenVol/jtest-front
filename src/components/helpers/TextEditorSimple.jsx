import React, { useState, useEffect } from 'react';
import { miscLang } from '../../langs/miscLang';

const TextEditorSimple = ({userLang, callback, startValue, index=0}) => {
  return (
    <textarea
      value = {startValue}
      placeholder = {miscLang.click_to_change[userLang]}
      onChange = {(event) => callback(event.target.value, index)}
    />
  )
}

export default TextEditorSimple;