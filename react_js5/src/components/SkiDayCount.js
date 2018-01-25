import React from 'react';
import '../stylesheets/ui.scss';
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');
const SkiDayCount = createReactClass({
    displayName: "SkiDayCount",
    render(){
        return(
        <div className="ski-day-count">
            <div  className="total-days">
                <span>5 Days</span>
            </div>
            <div className="powder-days">
                <span>2 Powder Days</span>
            </div>
            <div className="backcountry-days">
                <span>1 Hiking Day</span>
            </div>
        </div>);
    }
})
export default SkiDayCount;