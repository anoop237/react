import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ui.scss';
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
export default class SkiDayRow extends React.Component {
    render(){
       
        return(
                <tr>
                    <td className='table-data'>{(this.props.date.getMonth()+1)+'/'+this.props.date.getDate()+'/'+this.props.date.getFullYear()}</td>
                    <td className='table-data'>{this.props.resort}</td>
                    <td className='table-data'>{this.props.powder?<SnowFlake/>:null}</td>
                    <td className='table-data'>{this.props.backcountry?<Terrain/>:null}</td>
                </tr>
           );
    }
}
SkiDayRow.propTypes = {
    date: PropTypes.object,
    resort: PropTypes.string,
    powder: PropTypes.bool,
    backcountry :PropTypes.bool
}