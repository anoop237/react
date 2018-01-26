import React from 'react';
import {render} from 'react-dom';
import SkiDayList from './components/SkiDayList.js';

window.React = React;
var days = [
            {resort:'Squwa Valley',date:new Date('01/02/2016'),powder:true,backcountry:false},
            {resort:'Kirkwood',date:new Date('02/03/2016'),powder:false,backcountry:true},
            {resort:'Mt. Tallac',date:new Date('04/14/2016'),powder:false,backcountry:true}
           ];
render(<SkiDayList days={days}/>,document.getElementById('root'));