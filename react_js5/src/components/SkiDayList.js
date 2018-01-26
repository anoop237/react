import React from 'react';
import '../stylesheets/ui.scss';
import SkiDayRow from './SkiDayRow.js'
export default class SkiDayList extends React.Component {
    render(){
        return(
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Resort</th>
                    <th>Powder Day</th>
                    <th>BackCountry Day</th>
                </tr>
            </thead>
            <tbody>
                {this.props.days.map(function(data,index){
    	          return <SkiDayRow key={index} date={data.date} resort={data.resort} powder={data.powder} backcountry={data.backcountry}/>
                })
              }
            </tbody>
        </table>);
    }
}