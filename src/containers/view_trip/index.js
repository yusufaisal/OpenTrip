import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import { connect } from "react-redux";
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
ExpansionPanelSummary,
ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import { Link } from "react-router-dom";
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Dropzone from 'react-dropzone'
import _ from 'lodash';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import './style.css';

import NavBar from '../../components/navbar2';
import Footer from '../../components/footer';
import Destination from '../../components/ShowTrip/Destination';

import {fetchTripDetail} from '../../actions';

const styles = theme => ({
    greenLabel: {
        color: '#0f0',
    },
    greenUnderline: {
        '&:hover:not($disabled):before': {
            backgroundColor: '#040',
        },
    },
    greenInkbar: {
        '&:after': {
            backgroundColor: '#009688',
        },
    },
    redInkbar: {
        '&:after': {
            backgroundColor: '#F44336',
        },
    },
});

class ViewTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false,
            open: true,
            files: []
        }
    }

    componentWillMount(){
        this.props.fetchTripDetail();
    }

    render() {
        const { classes } = this.props;
        let author = this.props.trip;
        console.log(author);
        return (
            <div className="container-home">
                <NavBar />
                <main  className="main">
                    {/*<div style={{height:'420px',*/}
                             {/*background:'linear-gradient(rgba(255,255,255,0.0),rgba(0,0,0,0.5)),' +*/}
                             {/*'  url('+{main_image2}+') center/cover fixed no-repeat'}}>*/}

                    {/*</div>*/}
                    <div style={{
                        paddingLeft:"20%",
                        paddingRight:"20%",
                        paddingTop:"1.5rem",
                        paddingBottom:"1.5rem",
                        background: "#E0E0E0"
                    }}>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{background:"#FFEB3B" }}>
                                <Typography className="title-panel" >1. Destination</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel" >
                                <Destination author={this.props.trip._author} activities={this.props.trip.activities}/>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background:"#FFEB3B" }}>
                                <Typography className="title-panel">2. Booking</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel">
                                test
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background:"#FFEB3B" }}>
                                <Typography className="title-panel">3. Payment</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background:"#FFEB3B" }}>
                                <Typography className="title-panel">4. Done</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                    <Footer />
                </main>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        trip: state.trip
    };
}

export default connect(mapStateToProps, {fetchTripDetail})(withStyles(styles)(ViewTrip));