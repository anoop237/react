import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheet/ui.scss'
import Home from './components/Home'
import {Left,Whoops404,Right} from './components/Whoops404'
import {About} from './components/About'
import {MemberList} from './components/MemberList'
import {Router,Route,hashHistory} from 'react-router'
export const routes = (
                    <Router history={hashHistory}>
                        <Route path="/" component={Home}></Route>
                        <Route path="/" component={Left}>
                            <Route path="about" component={About}></Route>
                            <Route path="member-list" component={MemberList}></Route>
                        </Route>
                        <Route path="*" component={Whoops404}></Route>
                    </Router>
                    );
