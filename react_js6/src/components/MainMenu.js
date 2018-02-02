import React from 'react'
import {Link} from 'react-router'
export default class MainMenu extends React.Component{
        componentDidMount(){
            $('.button-collapse').sideNav('show');
            $('.button-collapse').sideNav({
                menuWidth: 300, 
                edge: 'left', 
                closeOnClick: true,
                draggable: true, 
                onOpen: function(el) {} , 
                onClose: function(el) {}  
            });
        }
        render(){
            return(
            <nav className="navbar">
                <div className="nav-wrapper">
                    <ul id="slide-out" className="side-nav">
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/about">About</Link></li>
                        <li><Link to = "/member-list">Members</Link></li>
                        <li><Link to = "/gallery">Gallery</Link></li>
                        <li><Link to = "/chart">Chart</Link></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/about">About</Link></li>
                        <li><Link to = "/member-list">Members</Link></li>
                        <li><Link to = "/gallery">Gallery</Link></li>
                        <li><Link to = "/chart">Chart</Link></li>
                    </ul>
                    <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                </div>
            </nav>)
        }
}