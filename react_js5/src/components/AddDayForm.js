import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import '../stylesheets/ui.scss';

const tahoeResorts = [
    "Alpine Medows",
    "Boreal",
    "Diamond Peak",
    "Donner Ski Ranch",
    "Heavenly",
    "Homewood",
    "Kirkwood",
    "Mt. Rose",
    "Northstar",
    "Sugar Bowl"
]

class Autocomplete extends React.Component{
    get value(){
        console.log(this.refs.inputResort.value);
        return this.refs.inputResort.value;
    }
    set value(inputResort){
        this.refs.inputResort.value = inputResort;
    }
    render(){
        return(
            <div>
                <input id="resort" type="text" defaultValue={this.props.resort} list="tohoe-resorts" ref="inputResort"/>
                <datalist id="tohoe-resorts">
                    {
                         this.props.options.map((data,index)=>
                            <option key={index}>{data}</option>
                        )
                    }
                </datalist>
            </div>
        )
    }
}


export const AddDayForm = ({resort ,date, powder, backcountry,onNewDay}) =>{
    let _resort,_date,_powder,_backcountry

    const submit = (e)=>{
        e.preventDefault();
        onNewDay({
            resort : _resort.value,
            date : _date.value,
            powder : _powder.checked,
            backcountry : _backcountry.checked,
        });
        _resort.value = '';
        _date.value = '';
        _powder.checked = false;
        _backcountry.checked = false;
    }
    return(
            <form onSubmit={submit} className="add-day-form">
                <div className="form-group">
                    <label htmlFor="resort">Resort Name</label>
                    <Autocomplete options={tahoeResorts} resort={resort} ref={input=>_resort=input}/>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input id="date" type="date" defaultValue={date} ref={input=>_date=input}/>
                </div>
                <div className="form-group">
                    <input id="powder" type="checkbox" defaultChecked={powder} ref={input=>_powder=input}/>
                    <label htmlFor="powder">Powder Day</label>
                </div>
                <div className="form-group">
                    <input id="backcountry" type="checkbox" defaultChecked={backcountry} ref={input=>_backcountry=input}/>
                    <label htmlFor="backcountry">Backcountry Day</label>
                </div>
                <button type="submit">Add</button>
            </form>
        );
}
AddDayForm.defaultProps = {
    date: "2017-02-12",
    resort: "ABC",
    powder: true,
    backcountry : false
}