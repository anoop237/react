import React from 'react'
import {Link} from 'react-router'
export const MainMenu=()=>
        <nav className="navbar">
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/member-list">Members</Link></li>
                </ul>
            </div>
        </nav>