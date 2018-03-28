import React from 'react'
import MainMenu from './MainMenu'
import {Footer} from './Footer'
import {Redirect} from 'react-router-dom'
import history from '../history'

import StarRatings from 'react-star-ratings';
 

export default class Home extends React.Component{     
    constructor(props){
        super(props)
        this.state={rating:0}
        this.changeRating=this.changeRating.bind(this)
    }
    changeRating( newRating ) {
      this.setState({
        rating: newRating
      });
    }
    componentDidMount() {
         $('.carousel').carousel({fullWidth:true});
         setInterval(function(){
             $('.carousel').carousel('next');
             //history.push('/about')
         },15000);
     
    }
    render(){
        return(
            <div>
                <div><MainMenu/></div>
               
                <div className="carousel carousel-slider" data-indicators="true">
                    <a href="#" className="carousel-item"><img src="assets/images/image1.jpg"/></a>
                    <a href="#" className="carousel-item"><img src="assets/images/image2.jpg"/></a>
                    <a href="#" className="carousel-item"><img src="assets/images/image3.jpg"/></a>
                    <a href="#" className="carousel-item"><img src="assets/images/image4.jpg"/></a>
                </div>
                <div className="center-align">
                    <h1></h1>
                    <h4>Welcome to <span className="red-text text-darken-4">MGDDC</span></h4>
                    <div className="title-line"></div>
                </div>
                <div className="row">
                    <div className="col m3 s12 center-align">
                        <div className="single-wc-content">
                            <span className="fa fa-users wc-icon"></span>
                            <h4 className="wc-tittle">Respect</h4>
                            <p className="justify">We recognize the expertise of all members of the College community and encourage individual contribution.</p>
                        </div>
                    </div>
                   <div className="col m3 s12 center-align">
                        <div className="single-wc-content wow fadeInUp">
                            <span className="fa fa-sellsy wc-icon"></span>
                                <h4 className="wc-tittle">Customer Oriented</h4>
                                <p className="justify">We make every decision to support the career and personal development of our learners. Our curriculum, teaching and services demonstrate that we value the diverse profiles of our learners. </p>
                        </div>
                    </div>
                    <div className="col m3 s12 center-align">
                        <div className="single-wc-content wow fadeInUp" >
                            <span className="fa fa-line-chart wc-icon"></span>
                                <h4 className="wc-tittle">Excellence</h4>
                                <p className="justify"> Exhibit quality in staffing, facilities, programs, and services. Promote continuous improvement. Anticipate needs and respond accordingly. Utilize systems that promote student and employee success.</p>
                        </div>
                    </div>
                    <div className="col m3 s12 center-align">
                        <div className="single-wc-content wow fadeInUp" >
                            <span className="fa fa-bus wc-icon"></span>
                            <h4 className="wc-tittle">Transport</h4>
                            <p className="justify">The College provides transport facility from almost all parts of the city. One need not worry about commuting to the College.Buses playing around the city would definitely help the students to travel from their homes to the Collegey without much ado.</p>
                        </div>
                    </div>
                    <StarRatings
                        rating={this.state.rating}
                        starRatedColor="blue"
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        starDimension="20px"
                        />				
                </div>
                <Footer/>
            </div>
        )
    }
}