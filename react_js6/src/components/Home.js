import React from 'react'
import {MainMenu} from './MainMenu'
export default class Home extends React.Component{     
    componentDidMount() {
         $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
    render(){
        return(<div>
            <div>
                <div><MainMenu/></div>
                <div className="carousel carousel-slider" data-ndicators="true">
                    <a className="carousel-item" href="#one!"><img src="assets/images/image1.jpg"/></a>
                    <a className="carousel-item" href="#two!"><img src="assets/images/image2.jpg"/></a>
                    <a className="carousel-item" href="#three!"><img src="assets/images/image3.jpg"/></a>
                    <a className="carousel-item" href="#four!"><img src="assets/images/image4.jpg"/></a>
                </div>
            </div>
        </div>)
    }
}