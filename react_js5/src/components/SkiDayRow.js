import React from 'react';
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
export default class SkiDayRow extends React.Component {
    render(){
        return(
                <tr>
                    <th>{(this.props.date.getMonth()+1)+'/'+this.props.date.getDate()+'/'+this.props.date.getFullYear()}</th>
                    <th>{this.props.resort}</th>
                    <th>{this.props.powder?<SnowFlake/>:null}</th>
                    <th>{this.props.backcountry?<Terrain/>:null}</th>
                </tr>
           );
    }
}