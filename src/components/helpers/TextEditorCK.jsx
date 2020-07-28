import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { miscLang } from '../../langs/miscLang';

const TextEditorCK = ({userLang, callback, startValue, index=0}) => {
  const [content, setContent] = useState(startValue);
  const [status, setStatus] = useState('preview');

  useEffect(() => {
    const save = setTimeout(() => {
      callback(content, index);
    }, 500);

    return () => { clearTimeout(save) }  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <>
      {status === 'editor'
      && <div className="withStyles" style={{position: "relative"}}>
        <CKEditor
          editor={ ClassicEditor }
          config={{
            ckfinder: {
              uploadUrl: '/somwhere'
            }
          }}
          language={userLang}
          data={startValue}
          onInit={editor => {
            editor.editing.view.focus()
          }}
          onChange={ (event, editor) => {
            const data = editor.getData();
            setContent(data);
          } }
        />
        <button 
          className="controlBtn BtnColors--green"
          style={{position: "absolute", bottom: 0, right: 0}}
          onClick={() => setStatus('preview')}
        >
          {miscLang.done[userLang]}
        </button>
      </div>}

      {status === 'preview'
      && <div 
        className="preview glass glass--middle glass--mate withStyles" onClick={() => setStatus('editor')}
        dangerouslySetInnerHTML={{ __html: startValue ? startValue : miscLang.click_to_change[userLang] }}
      />}
    </>
  )
}

export default TextEditorCK;