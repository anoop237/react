import React from 'react';
import {render} from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import App from './components/App.js';
import {Whoops404} from './components/Whoops404';
import PropTypes from 'prop-types';
window.React = React;
render(<Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="list-days" component={App}/>
        <Route path="add-day" component={App}/>
        <Route path="*" component={Whoops404}/>
        </Router>,document.getElementById('root'));