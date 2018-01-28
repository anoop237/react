import React from 'react'
import {MainMenu} from './MainMenu'
export default class Home extends React.Component{     
    componentDidMount() {
         $('.carousel').carousel({fullWidth:true,duration:100});
    }
    render(){
        return(<div>
            <div>
                <div><MainMenu/></div>
                <div className="carousel carousel-slider" data-indicators="true">
                    <div className="carousel-item"><img src="assets/images/image1.jpg"/></div>
                    <div className="carousel-item"><img src="assets/images/image2.jpg"/></div>
                    <div className="carousel-item"><img src="assets/images/image3.jpg"/></div>
                    <div className="carousel-item"><img src="assets/images/image4.jpg"/></div>
                </div>
            </div>
        </div>)
    }
}