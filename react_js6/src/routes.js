import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheet/ui.scss'
import Home from './components/Home'
import {Left,Whoops404,Right} from './components/Whoops404'
import {About} from './components/About'
import {MemberList} from './components/MemberList'
import {Gallery} from './components/Gallery'
import Chart from './components/Chart'
//import {Router,Route,hashHistory} from 'react-router'
import {Router,Route} from 'react-router-dom'
import history  from './history'

export const routes = (
                    <Router history={history}>
                        <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/member-list" component={MemberList}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/chart" component={Chart}/>
                        <Route path="*" component={Whoops404}/>
                        </div>
                    </Router>
                    );
