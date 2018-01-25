import React from 'react';
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain'
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
                <span>{this.props.total} Days</span>
            </div>
            <div className="powder-days">
                <span>{this.props.powder} Powder Days</span>
            </div>
            <div className="backcountry-days">
                <span>{this.props.backcountry} Hiking Day</span>
            </div>
            <div className="goal-days">
                <Terrain/><span>{this.props.goal}</span>
            </div>
             <div className="goal-days">
                Progress <span>{this.calculateProgress(this.props.total,this.props.goal)}</span>
            </div>
        </div>);
    }
})