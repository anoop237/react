import React from 'react'
import {Footer} from './Footer'
import MainMenu from './MainMenu'
export const MemberList = ()=>
        <div>
            <div><MainMenu/></div>
           <div className="center-align">
                <h4>Meet our <span className="red-text text-darken-4">Team</span></h4>
                <div className="title-line"></div>
            </div>
            <div className="team-content row">
                <ul className="team-grid">
                    <li className="col m3 s12">
                        <div className="team-item team-img-1" >
                            <div className="team-info">
                            </div>
                        </div>
                        <div className="team-address">
                            <div>Er. Anoop Kumar</div>
                            <span>CEO &amp; Founder (B.Tech)</span>
                        </div>
                    </li>
                    <li className="col m3 s12">
                        <div className="team-item team-img-2">
                            <div className="team-info">
                                
                            </div>
                        </div>
                        <div className="team-address">
                            <div>Er. Sankalp Singh</div>
                            <span>Software Engineer (B.Tech)</span>                  
                        </div>
                    </li>
                    <li className="col m3 s12">
                        <div className="team-item team-img-3">
                            <div className="team-info">
                                  
                            </div>
                        </div>
                        <div className="team-address">
                            <div>Er. Akhilesh Sahu</div>
                            <span>Software Engineer (B.Tech)</span>
                        </div>
                    </li>
                    <li className="col m3 s12">
                        <div className="team-item team-img-4">
                            <div className="team-info">
                               
                            </div>
                        </div>
                        <div className="team-address">
                            <div>Mr. Ashish Sahu</div>
                            <span>Software Engineer (MCA)</span>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer/>
        </div>