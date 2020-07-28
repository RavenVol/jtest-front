import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import combinedReducer from './reducers/combinedReducer';
import * as serviceWorker from './misc/serviceWorker';

const store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
