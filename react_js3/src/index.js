import React from 'react';
import ReactDOM from 'react-dom'
import {name,qual} from './lib'
ReactDOM.render(
  <div>
    <h1>CSS Bundling with Webpack</h1>
    {name}
    {qual}
  </div>,
  document.getElementById('root')
);

