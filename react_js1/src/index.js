import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App start={Date.now()} />, document.getElementById('root'));
registerServiceWorker();
