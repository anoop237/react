import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {updateUser} from './actions/user-actions'
import { bindActionCreators } from 'redux'
class App extends Component {
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }
  onUpdateUser(event){
    const {dispatch} =this.props
   // dispatch(updateUser(event.target.value))
    this.props.onUpdateUser(event.target.value)
  }
  render() {
    console.log('Initial state',this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input onChange={this.onUpdateUser}/>
        <div>{this.props.user}</div>
      </div>
    );
  }
}
 const mapStateToProps=(state,props)=>{
   return {
     products:state.products,
     user:state.user,
     userPlusProp:`${state.user}${props.randomProps}`
   }
 }
 const mapActionsToProps=(dispatch,props)=>{
   return bindActionCreators({onUpdateUser:updateUser},dispatch);
 }

 const mergeProps=(propsFromState,propsFromDispatch,ownProps)=>{
  console.log(propsFromState,propsFromDispatch,ownProps); 
  return {
     
   };
 }
 
 
export default connect(mapStateToProps,mapActionsToProps,mergeProps)(App);
