import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import ListSubheader from 'material-ui/List/ListSubheader';
import { DatePicker } from 'material-ui-pickers';
import IconButton from 'material-ui/IconButton';
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

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import keyboard_arrow_left from 'material-ui-icons/KeyboardArrowLeft';
import keyboard_arrow_right from 'material-ui-icons/KeyboardArrowRight';
import Map from 'material-ui-icons/Map';

import './style.css';

import NavBar from '../../components/navbar2';
import Carousel from '../../components/carousel';
import SideBar from '../../components/sidebar';
import Footer from '../../components/footer';
import TripList from '../../components/trip-list';
import ProvinceList from '../../components/province-list';


import { fetchDataTrips } from '../../actions';


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
    disabled: {},
});


class CreateTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: false,
            open: true,
            files: []
        }    
    }
    
    onDrop(files) {
        this.setState({
            files
        });
    }

    toggleDrawer = (drawer) => () => {
        this.setState({
            drawer,
        });
    };
    
    componentDidMount(){
        this.props.fetchDataTrips();
    }

    render() {
        const { classes } = this.props;
        
        return (
            <div className="container-home">
                <NavBar />
                <main  className="main">
                    <div style={{
                        paddingLeft:"20%",
                        paddingRight:"20%",
                        paddingTop:"1.5rem",
                        paddingBottom:"1.5rem",
                        background: "#E0E0E0"
                    }}>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{background:"#FFEB3B" }}>
                                <Typography className="title-panel" >Destinantion</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel" >
                                <div className= "container_create_trip">
                                    <div style={{ marginBottom: "2rem", textAlign: "center" }}>
                                        <span>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "1rem"
                                            }}>
                                                Become a Trip Leader
                                            </h4>
                                        </span>
                                        <span>
                                            <h5 style={{fontFamily: "Rubik-Reguler" }}>
                                                Start your own trip, invite your fellow Travel and go on a journey
                                            </h5>
                                        </span>
                                    </div>
                                    <Divider />
                                    <div style={{ paddingTop: "0.7rem", paddingLeft: "1.5rem", paddingBottom: "0.7rem"}}>
                                        <div>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "1rem"
                                            }}>
                                                Destinantion
                                            </h4>
                                        </div>
                                        <div className="row" style={{ height: "auto" }}>    
                                            <div className="col-1">
                                                <Map style={{
                                                    color: "grey",
                                                    height: 48,
                                                    width: 48,
                                                }} /> 
                                            </div>
                                            <div className="col-2" style={{
                                                paddingTop: "1rem",
                                                paddingBottom: "1rem",
                                                fontFamily: "Rubik-Medium"
                                            }}>
                                                <h5>
                                                    <Link to="/create_trip" style={{
                                                        color: "#009688",
                                                        textDecoration: "none"
                                                    }}>Destination</Link>
                                                </h5>
                                            </div>                                            
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{ 
                                        paddingTop: "0.7rem", 
                                        paddingLeft: "1.5rem", 
                                        paddingRight: "1.5rem", 
                                        marginBottom: "2rem", 
                                       }}>
                                        <div>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "0.7rem"
                                            }}>
                                                Give your trip title and describe the main activity briefly:
                                            </h4>
                                        </div>                  
                                        <FormControl className={classes.formControl} style={{ 
                                            width: "100%", 
                                            marginBottom: "1.5rem",
                                            marginTop: "0.3rem" }}>
                                            <InputLabel htmlFor="trip-title" style={{
                                                 color: "grey", 
                                                 fontSize: "1.4rem" 
                                                 }} >
                                                 Trip title
                                            </InputLabel>
                                            <Input 
                                                id="trip-title"
                                                classes={{
                                                    inkbar: classes.greenInkbar,
                                                    underline: classes.greenUnderline
                                                }}/>
                                        </FormControl>
                                        <FormControl className={classes.formControl} style={{ width: "100%" }}>
                                            <InputLabel htmlFor="trip-title" style={{
                                                 color: "grey", 
                                                 fontSize: "1.4rem" 
                                                 }} >
                                                 Description
                                            </InputLabel>
                                            <Input 
                                                id="trip-desc"
                                                classes={{
                                                    inkbar: classes.greenInkbar,
                                                    underline: classes.greenUnderline
                                                }}/>
                                        </FormControl>
                                    </div>
                                    <Divider />
                                    <div style={{ 
                                        paddingTop: "0.7rem", 
                                        paddingLeft: "1.5rem", 
                                        paddingRight: "1.5rem", 
                                    }}>  
                                        <div>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "0.7rem"
                                            }}>
                                                Give your trip title and describe the main activity briefly:
                                            </h4>
                                        </div>                  
                                        <div className="row" style={{ height: "auto", marginBottom: "1rem" }}>
                                            <div className="dropzone" style={{ paddingLeft: "1rem" }}>
                                                <Dropzone onDrop={this.onDrop.bind(this)}>
                                                    <p>Try dropping some files here, or click to select files to upload.</p>
                                                </Dropzone>
                                            </div>
                                        </div>
                                        <Button
                                            raised
                                            color="secondary"
                                            size="medium"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontSize: 16,
                                                borderRadius: 5,
                                                fontFamily: "Rubik-Reguler",
                                                float: "right"
                                            }}>
                                            Done
                                        </Button>
                                    </div>
                                    
                                </div>
                                
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background:"#FFEB3B" }}>
                                <Typography className="title-panel">Meeting Point</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel">
                                <div className="container_create_trip">
                                    
                                    <div style={{ paddingTop: "0.7rem", paddingLeft: "1.5rem", paddingBottom: "0.7rem" }}>
                                        <div>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "1rem"
                                            }}>
                                                Where will be the meeting point?
                                            </h4>
                                            <p style={{ color: "grey" }}>
                                                <h5> 
                                                    Pick a spot where you will meet up<br/> 
                                                    with you before going to the destination 
                                                </h5>
                                            </p>
                                        </div>
                                        <div className="row" style={{ height: "auto" }}>
                                            <div className="col-1">
                                                <Map style={{
                                                    color: "grey",
                                                    height: 48,
                                                    width: 48,
                                                }} />
                                            </div>
                                            <div className="col-2" style={{
                                                paddingTop: "1rem",
                                                paddingBottom: "1rem",
                                                fontFamily: "Rubik-Medium"
                                            }}>
                                                <h5>
                                                    <Link to="/create_trip" style={{
                                                        color: "#009688",
                                                        textDecoration: "none"
                                                    }}>Destination</Link>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="row" style={{ height: "auto" }}>
                                            <div className="col-1">
                                                <Map style={{
                                                    color: "grey",
                                                    height: 48,
                                                    width: 48,
                                                }} />
                                            </div>
                                            <div className="col-11" style={{
                                                fontFamily: "Rubik-Medium",
                                            }}>
                                                <FormControl className={classes.formControl} style={{
                                                    width: "100%",
                                                    paddingRight: "1.5rem"
                                                }}>
                                                    <InputLabel htmlFor="trip-title" style={{
                                                        color: "grey",
                                                        fontSize: "1.4rem"
                                                    }} >
                                                        Trip title
                                                    </InputLabel>
                                                    <Input
                                                        id="trip-title"
                                                        classes={{
                                                            inkbar: classes.greenInkbar,
                                                            underline: classes.greenUnderline
                                                        }} />
                                                </FormControl>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                    <Divider />
                                    <div style={{
                                        paddingTop: "0.7rem",
                                        paddingLeft: "1.5rem",
                                        paddingRight: "1.5rem",
                                        marginBottom: "2rem",
                                    }}>
                                        <div>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "0.7rem"
                                            }}>
                                                Give your trip title and describe the main activity briefly:
                                            </h4>
                                        </div>
                                        <FormControl className={classes.formControl} style={{
                                            width: "100%",
                                            marginBottom: "1.5rem",
                                            marginTop: "0.3rem"
                                        }}>
                                            <InputLabel htmlFor="trip-title" style={{
                                                color: "grey",
                                                fontSize: "1.4rem"
                                            }} >
                                                Trip title
                                            </InputLabel>
                                            <Input
                                                id="trip-title"
                                                classes={{
                                                    inkbar: classes.greenInkbar,
                                                    underline: classes.greenUnderline
                                                }} />
                                        </FormControl>
                                        <FormControl className={classes.formControl} style={{ width: "100%" }}>
                                            <InputLabel htmlFor="trip-title" style={{
                                                color: "grey",
                                                fontSize: "1.4rem"
                                            }} >
                                                Description
                                            </InputLabel>
                                            <Input
                                                id="trip-desc"
                                                classes={{
                                                    inkbar: classes.greenInkbar,
                                                    underline: classes.greenUnderline
                                                }} />
                                        </FormControl>
                                    </div>
                                    <Divider />
                                    <div style={{
                                        paddingTop: "0.7rem",
                                        paddingLeft: "1.5rem",
                                        paddingRight: "1.5rem",
                                    }}>
                                        <div>
                                            <h4 style={{
                                                fontFamily: "Rubik-Bold",
                                                marginBottom: "0.7rem"
                                            }}>
                                                Give your trip title and describe the main activity briefly:
                                            </h4>
                                        </div>
                                        <div className="row" style={{ height: "auto", marginBottom: "1rem" }}>
                                            <div className="dropzone" style={{ paddingLeft: "1rem" }}>
                                                <Dropzone onDrop={this.onDrop.bind(this)}>
                                                    <p>Try dropping some files here, or click to select files to upload.</p>
                                                </Dropzone>
                                            </div>
                                        </div>
                                        <Button
                                            raised
                                            color="secondary"
                                            size="medium"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontSize: 16,
                                                borderRadius: 5,
                                                fontFamily: "Rubik-Reguler",
                                                float: "right"
                                            }}>
                                            Done
                                        </Button>
                                    </div>

                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel style={{ margin: 0 }}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background:"#FFEB3B" }}>
                                <Typography className="title-panel">Cost</Typography>
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
                                <Typography className="title-panel">Activity</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="content-panel">
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel style={{ margin: 0 }} disabled>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ background:"#FFEB3B" }}>
                                <Typography className="title-panel">FinalJ</Typography>
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
        Trips: state.Trips
    };
}

export default connect(mapStateToProps, {fetchDataTrips})(withStyles(styles)(CreateTrip));