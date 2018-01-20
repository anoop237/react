import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Clock start={Date.now()} />, document.getElementById('root'));
registerServiceWorker();
