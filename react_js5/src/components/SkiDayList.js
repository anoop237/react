import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ui.scss';
import SkiDayRow from './SkiDayRow.js'
export default class SkiDayList extends React.Component {
    render(){
        return(
        <div><h1>SkiDays List</h1><table className="table">
            <thead>
                <tr>
                    <th className='table-data'>Date</th>
                    <th className='table-data'>Resort</th>
                    <th className='table-data'>Powder Day</th>
                    <th className='table-data'>BackCountry Day</th>
                </tr>
            </thead>
            <tbody>
                {this.props.days.map(function(data,index){
    	          return <SkiDayRow key={index} date={data.date} resort={data.resort} powder={data.powder} backcountry={data.backcountry}/>
                })
              }
            </tbody>
        </table></div>);
    }
}
SkiDayList.propTypes = {
    days:function(props){
        if(!Array.isArray(props.days)){
            return new Error('SkiDayList days should be an array');
        }
        if(!props.days.length){
            return new Error('SkiDayList days array should have at least one element');
        }
        else{
            return null;
        }
    }
}