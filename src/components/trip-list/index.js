import React, { Component } from 'react';
import _ from 'lodash';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom';

import './style.css';

class   ItemList extends Component {

    renderTripList() {
        return _.map(this.props.tripList, trip => {
            let len = trip.title.length >= 35;
            return (
                <div key={trip._id} className="col-xs-6 col-sm-6 col-md-6 col-lg-4">
                    <div className="trip-item">
                        <Link to={'trip/'+trip._id}>
                            <div className="imagebox">
                                <div style={{ height: "auto" }}>
                                    <img alt="asdasd" src={trip.main_image} className="img-responsive"  width={"100%"} />
                                    <div className="imagebox-desc">
                                        <div style={{
                                            height:"100%",
                                            width:"100%",
                                            position:"relative" }}>

                                        <span className="desc">
                                            {/* <TextTruncate
                                                line={2}
                                                truncateText="…"
                                                text={trip.title}

                                            /> */}
                                            <span style={{
                                                fontFamily: "Rubik-Light",
                                                fontSize: 14
                                            }}>
                                                {trip.title.substr(0,35)}
                                                {len ? <span>...</span> : <span></span>}
                                            </span>

                                            <h2 style={{
                                                fontFamily:"Rubik-Medium",
                                            }}>{trip.destination}</h2>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                            <span style={{ 
                                float: "left", 
                                marginTop: 6,
                                fontFamily: "Rubik-Medium" }}>
                                <span>IDR</span>
                                <span style={{ fontSize: 28 }}>1.000.000</span>
                            </span>
                            <span style={{ float: "right", marginTop: 18 }}>3d 2n</span>
                        </div>
                        <br />
                        <br />
                        <Divider style={{ background: "#BDBDBD" }} />
                        <div style={{ padding: 16 }}>
                            <div style={{ display: "flex" }}>
                                {trip._author.profile_picture ? 
                                <Avatar
                                    src={trip._author.profile_picture}
                                    style={{ height: 54, width: 54 }} /> : 
                                <Avatar
                                    src={"images/default_profile.png"}
                                    style={{ height: 54, width: 54 }} />}
                                
                                <div style={{ marginLeft: 16, marginTop: 5 }}>
                                    <p style={{ 
                                        marginBottom: 4,
                                        fontFamily:"Rubik-Light",
                                        fontSize:16 }}>
                                        {trip._author.name}
                                    </p>
                                    <StarRatings
                                        rating={5}
                                        starRatedColor="yellow"
                                        numberOfStars={5}
                                        starDimension="19px"
                                        starSpacing="2px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="row" style={{paddingTop:15}}>
                {this.renderTripList()}                
            </div>
        );
    }
}

export default ItemList;