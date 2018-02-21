import React from 'react';
import {render} from 'react-dom';
import SkiDayList from './SkiDayList.js';
import {SkiDayCount} from './SkiDayCount';
import {AddDayForm} from './AddDayForm';
import {Menu} from './Menu';
export default class App extends React.Component{
    constructor(props){
        super();
        this.state = {
                    allSkiDays:[
                                {resort:'Squwa Valley',date:'2016-09-11',powder:true,backcountry:false},
                                
                                ]
                    };
        this.addDay=this.addDay.bind(this);
    }
    addDay(newDay){
        this.setState({
            allSkiDays:[...this.state.allSkiDays,newDay]
        });
    }
    countDays(filter){
        return this.state.allSkiDays.filter((day)=>filter?day[filter]:day).length;
    }
    render(){
        return (
        <div>
               {
                (this.props.location.pathname==="/")?<SkiDayCount total={this.countDays()} powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} />
               :((this.props.location.pathname==="/add-day")?<AddDayForm onNewDay={this.addDay}/> :<SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>)
               }
              <Menu/>
        </div>)
    }
}