import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';
import { DatePicker } from 'material-ui-pickers';
import keyboard_arrow_left from 'material-ui-icons/KeyboardArrowLeft';
import keyboard_arrow_right from 'material-ui-icons/KeyboardArrowRight';
import { connect } from "react-redux";

import './style.css';

import NavBar from '../../components/navbar';
import Carousel from '../../components/carousel';
import SideBar from '../../components/sidebar';
import Footer from '../../components/footer';
import TripList from '../../components/trip-list';
import ProvinceList from '../../components/province-list';

import { fetchDataTrips,fetchBanner } from '../../actions';


class Home extends Component {
    state = {
        drawer: false,
        open: true,
    };

    toggleDrawer = (drawer) => () => {
        this.setState({
            drawer,
        });
    };
    
    componentDidMount(){
        this.props.fetchDataTrips();
        this.props.fetchBanner();
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.banners);
        return (
            <div className="container-home">
                <NavBar history={this.props.history}/>
                <main  className="main">
                    <div className="carousel-container">
                        <Carousel banners={this.props.banners}/>
                    </div>
                    <div className="content">
                        <div className="row" >
                            <div className="col-2 d-none d-xl-block">
                                <SideBar />
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-10 col-sm-12">
                                <ListSubheader component="div"><br/></ListSubheader>
                                <Divider style={{ background: "black" }} />
                                <div style={{
                                    marginBottom:"3rem"
                                }}>
                                    <ProvinceList/>
                                </div>

                                <Divider style={{ background: "black" }} />
                                <div style={{
                                    marginBottom: "5rem"
                                }}>
                                    <TripList tripList={this.props.trips}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        trips: state.trips,
        banners: state.banners
    };
}

export default connect(mapStateToProps, {fetchDataTrips,fetchBanner})(Home);