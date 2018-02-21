import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import '../stylesheets/ui.scss';
export const AddDayForm = ({resort ,date, powder, backcountry}) =>{
    let _resort,_date,_powder,_backcountry

    const submit = (e)=>{
        e.preventDefault();
        console.log('resort',_resort.value);
        console.log('date',_date.value);
        console.log('powder',_powder.checked);
        console.log('backcountry',_backcountry.checked);
    }
    return(
            <form onSubmit={submit} className="add-day-form">
                <div className="form-group">
                    <label htmlFor="resort">Resort Name</label>
                    <input id="resort" type="text" defaultValue={resort} ref={input=>_resort=input}/>
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