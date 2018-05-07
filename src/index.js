import 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import ConfigureStore from './store/ConfigureStore'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

const store = ConfigureStore();

ReactDOM.render((
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
), document.getElementById('root'));
registerServiceWorker();
