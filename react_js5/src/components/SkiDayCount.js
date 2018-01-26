import React from 'react';
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import PropTypes from 'prop-types';
var createReactClass = require('create-react-class');
export const SkiDayCount = createReactClass({
    displayName: "SkiDayCount",
    percentToDecimal(decimal){
        return ((decimal*100)+' %');
    },
    calculateProgress(total,goal){
        return this.percentToDecimal(total/goal);
    },
    render(){
        return(
        <div className="ski-day-count">
            <div  className="total-days">
                <span>{this.props.total}</span><Calendar/><span> Days</span>
            </div>
            <div className="powder-days">
                <span>{this.props.powder}</span><SnowFlake/><span> Powder Days</span>
            </div>
            <div className="backcountry-days">
                <span>{this.props.backcountry}</span><Terrain/> <span> Hiking Day</span>
            </div>
            <div className="goal-days">
               <span>{this.props.goal}</span>
            </div>
             <div className="goal-days">
                Progress <span>{this.calculateProgress(this.props.total,this.props.goal)}</span>
            </div>
        </div>);
    }
})