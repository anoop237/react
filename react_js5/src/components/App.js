import React from 'react';
import {render} from 'react-dom';
import SkiDayList from './SkiDayList.js';
import {SkiDayCount} from './SkiDayCount';
import {AddDayForm} from './AddDayForm';
export default class App extends React.Component{
    constructor(props){
        super();
        this.state = {
                    allSkiDays:[
                                {resort:'Squwa Valley',date:new Date('01/02/2016'),powder:true,backcountry:false},
                                {resort:'Kirkwood',date:new Date('02/03/2016'),powder:false,backcountry:false},
                                {resort:'Mt. Tallac',date:new Date('04/14/2016'),powder:false,backcountry:true}
                                ]
                    };
    }
    countDays(filter){
        return this.state.allSkiDays.filter((day)=>filter?day[filter]:day).length;
    }
    render(){
        return (
        <div>
               {
                (this.props.location.pathname==="/day-count")?<SkiDayCount total={this.countDays()} powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} />
               :((this.props.location.pathname==="/add-day")?<AddDayForm/> :<SkiDayList days={this.state.allSkiDays}/>)
               }
              
        </div>)
    }

}