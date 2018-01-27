import React from 'react'
import {Link} from 'react-router'
export const MainMenu = ()=>
        <ul className="side-menu">
           <li><Link to = "/">Home</Link></li>
           <li><Link to = "/about">About</Link></li>
           <li><Link to = "/member-list">Members</Link></li>
        </ul>
