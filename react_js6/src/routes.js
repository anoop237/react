import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheet/ui.scss'
import Home from './components/Home'
import {Whoops404} from './components/Whoops404'
import {About} from './components/About'
import {MemberList} from './components/MemberList'
import {Gallery} from './components/Gallery'
import Chart from './components/Chart'
//import {Router,Route,hashHistory} from 'react-router'
import {Router,Route,Switch} from 'react-router-dom'
import history  from './history'

export const routes = (
                    <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/member-list" component={MemberList}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/chart" component={Chart}/>
                        <Route component={Whoops404}/>
                    </Switch>
                    </Router>
                    );
