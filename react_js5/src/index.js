import React from 'react';
import {render} from 'react-dom';
import {SkiDayCount} from './components/SkiDayCount';

window.React = React
render(<SkiDayCount total={60} powder={30} backcountry={10} goal={100}/>,document.getElementById('root'));