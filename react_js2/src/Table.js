import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Table extends React.Component {
  constructor(){
  	super();
   	
  }
  render() {
    return (
        <table className="table">
            <thead>
              <tr className="table-row">{this.props.header.map(function(data,index){
   					     return (<th key={index}>{data}</th>)
    				    })}
              </tr>
            </thead>
            <tbody>
              {this.props.data.map(function(data,index){
    	          return <tr key={index} className="table-row"><td>{data.name}</td><td>{data.email}</td><td>{data.contact}</td></tr>
                })
              }
            </tbody>
        </table>);
  }
}
export default Table;
