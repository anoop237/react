import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends React.Component {
  constructor(){
  	super();
  	this.state = {h:'00',m:'00',s:'00'};
    this.tick = this.tick.bind(this);
  }
  componentDidMount(){
  var hrs = new Date(this.props.start).getHours();
  var min = new Date(this.props.start).getMinutes();
  var sec = new Date(this.props.start).getSeconds();
  this.setState({h:this.format(hrs),m:this.format(min),s:this.format(sec)});
  	setInterval(this.tick,1000);
  }
  format(num){
  	if(num < 10){
    	num = '0' + num;
    }
    return num;
  }
  tick(){
  var hrs = parseInt(this.state.h);
  var min = parseInt(this.state.m);
  var sec = parseInt(this.state.s);
  	if(sec == 59){
    	this.setState({s:'00',m:this.format(min+1)});
      //this.setState({s:'00'});
    }
    else{
    	this.setState({s:this.format(sec+1)});
    }
    if(min == 59){
    	this.setState({h:this.format(hrs+1),m:'00'});
    }
    if(hrs > 23){
    	this.setState({h:'00',m:'00',s:'00'});
    }
  }
  render() {
    return <div className="clock">{this.state.h}:{this.state.m}:{this.state.s} </div>;
  }
}
export default Clock;
