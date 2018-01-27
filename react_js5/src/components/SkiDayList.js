import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/ui.scss';
import SkiDayRow from './SkiDayRow.js'
import {Link} from 'react-router'
export default class SkiDayList extends React.Component {
    render(){
        const filter = this.props.filter;
        //const days = this.props.days;
        //console.log(filter);console.log(days);
        const filteredDays = (!filter|| !filter.match(/powder|backcountry/))?days:days.filter(day=>day[filter]);
        //console.log(filteredDays);
        return(
        <div>
            <h1>SkiDays List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th className='table-data'>Date</th>
                        <th className='table-data'>Resort</th>
                        <th className='table-data'>Powder Day</th>
                        <th className='table-data'>BackCountry Day</th>
                    </tr>
                    <tr>
                        <th className='table-data'><Link to="/list-days">Total Days</Link></th>
                        <th className='table-data'></th>
                        <th className='table-data'><Link to="list-days/powder">Powder Days</Link></th>
                        <th className='table-data'><Link to="list-days/backcountry">BackCountry Days</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map(function(data,index){
                    return <SkiDayRow key={index} date={data.date} resort={data.resort} powder={data.powder} backcountry={data.backcountry}/>
                    })
                }
                </tbody>
            </table>
        </div>);
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