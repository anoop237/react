import React from 'react'
import {Footer} from './Footer'
import MainMenu from './MainMenu'
export const About = ()=>
        <div>
            <div><MainMenu/></div>
            <div className="center-align">
                <h4>Director's <span className="red-text text-darken-4">Message</span></h4>
                <div className="title-line"></div>
            </div>
            <div className="row about">
                <div className="col s4 m2 about_img">
                    <img className="responsive-img" src="assets/images/anoop.jpg"/>
                    <div className="center-align">Er. Anoop Kumar</div>
                </div>
                <div className="col s8 m10">
                    <p className="col s12 paragraph">
                        I will support the mission and vision of the College. Focus on student needs. 
                        Respond to the changing needs of our communities in a timely manner. 
                        Create new programs and services to meet identified needs. 
                        Continuously evaluate and improve programs, services, systems, and policies. 
                        Utilize a shared decision-making process.
                    </p>
                    <p className="col s12 paragraph">
                        I will treat people with dignity and encourage feelings of self-worth. 
                        Promote trust through professional courtesy and fair treatment. 
                        Recognize and support employee and student contributions.
                    </p>
                    <p className="col s12 paragraph">
                        I will take responsibility for personal and professional growth and development. 
                        Continuously evaluate and improve our systems and policies. 
                        Establish and communicate clearly defined and articulated goals and objectives. 
                        Ensure our work adds value to the College and District. 
                        Demonstrate fiscal and social responsibility. 
                        Diversity We believe that our similarities and differences are opportunities for establishing a common bond and strengthening the College.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>