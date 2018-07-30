import React, { Component } from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

// import './signup_style.css';
import './test.css';


class Carousel extends Component {
    renderBullet(){
        let idx = -1;
        return _.map(this.props.banners, banner => {
            idx++;
            if(idx==0){
                return(
                    <li data-target="#carouselExampleIndicators" data-slide-to={idx} className="bullet active"></li>
                )
            } else{
                return(
                    <li data-target="#carouselExampleIndicators" data-slide-to={idx} className="bullet"></li>
                )
            }

        })
    }

    renderBannerList(){
        let idx = -1;
        return _.map(this.props.banners,  banner => {
            idx++;
            if(idx==0){
                return(
                    <div className="carousel-item active csitem" style={{
                        backgroundImage: `url(${banner.image})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                    </div>
                )
            } else {
                return(
                    <div className="carousel-item csitem" style={{
                        backgroundImage: `url(${banner.image})`,
                        backgroundSize: "cover",
                        backgroundPosition:"center"
                    }}>
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.renderBullet()}
                </ol>

                <div className="carousel-inner" role="listbox" >
                    {this.renderBannerList()}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;