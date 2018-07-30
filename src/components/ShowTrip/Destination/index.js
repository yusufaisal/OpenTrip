import React,{Component} from 'react';
import _ from 'lodash';

import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Devider from 'material-ui/Divider';
import Person from 'material-ui-icons/PersonPinCircle';
import Dialog,{DialogContent,DialogTitle,DialogContentText,DialogActions} from 'material-ui/Dialog'
import Modal from 'material-ui/Modal';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    bigAvatar: {
        width: 60,
        height: 60,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


class Destination extends Component{
    constructor(props){
        super(props);
        this.state = {
            activities: false,
            required: false,
            priceInclude: false,
            priceExclude: false,
            scroll: 'paper',
        }}

    handleOpen = dialog => {
        if(dialog === 'required'){
            this.setState({ required:true })
        } else if (dialog === 'priceInclude'){
            this.setState({ priceInclude:true })
        } else if (dialog === 'priceExclude'){
            this.setState({ priceExclude:true })
        }
        this.setState({ required:true});
    };

    handleClose = dialog => {
        if(dialog === 'required'){
            this.setState({ required:false })
        } else if (dialog ==='priceInclude'){
            this.setState({ priceInclude:false })
        } else if (dialog === 'priceExclude'){
            this.setState({ priceExclude:false })
        }
        this.setState({ required: false });
    };

    renderActivities(){
        let idx = 0;
        return _.map(this.props.activities, item => {
            idx++;
            return (
                <div style={{paddingTop:'15px'}}>
                    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5px',paddingBottom:'5px'}}>
                        <Typography style={{paddingTop:'4px'}}>Activitas</Typography>
                        <Button onClick={this.handleOpen.bind(this,'activities'+idx)}>Lihat Selengkapnya</Button>
                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose.bind(this,'activities'+idx)}
                            scroll={this.state.scroll}
                            aria-labelledby="scroll-dialog-title"
                        >
                            <DialogTitle id="scroll-dialog-title">Detail</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    {item.description}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Typography style={{fontFamily:'Rubik-Bold',paddingBottom:'12px'}}>Hari {idx} : {item.title}</Typography>
                    <img style={{borderRadius:'8px',height:'60vh',width:'100%'}} src={item.image}/>
                    <div>
                    </div>
                    <Devider style={{marginTop:'50px'}}/>
                </div>
            )
        })
    }

    render(){
        const { classes } = this.props;
        console.log(this.props.trip);
        return(
            <div style={{width:'100%'}}>
                <div style={{display:'flex'}}>
                    <Avatar style={{marginRight:'12px',marginBottom:'12px'}}
                        alt="user"
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    ><Person/></Avatar>

                    <div>
                        <Typography style={{fontFamily:'Rubik-Light !important'}}>Trip Leader</Typography>
                        <Typography style={{fontFamily:'Rubik-Reguler !important'}}>Anon</Typography>
                    </div>
                </div>
                <Devider/>
                <div>
                    {this.renderActivities()}
                    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5px',paddingBottom:'5px'}}>
                        <Typography style={{paddingTop:'10px'}}>Required Equipment</Typography>
                        <Button onClick={this.handleOpen.bind(this,'required')}>Lihat Selengkapnya</Button>
                        <Dialog
                            open={this.state.required}
                            onClose={this.handleClose.bind(this,'required')}
                            scroll={this.state.scroll}
                            aria-labelledby="scroll-dialog-title"
                        >
                            <DialogTitle id="scroll-dialog-title">Detail</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Required
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose.bind(this,'required')} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Devider/>
                    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5px',paddingBottom:'5px'}}>
                        <Typography style={{paddingTop:'10px'}}>Price Include</Typography>
                        <Button onClick={this.handleOpen.bind(this,'priceInclude')}>Lihat Selengkapnya</Button>
                        <Dialog
                            open={this.state.priceInclude}
                            onClose={this.handleClose.bind(this,'priceInclude')}
                            scroll={this.state.scroll}
                            aria-labelledby="scroll-dialog-title"
                        >
                            <DialogTitle id="scroll-dialog-title">Detail</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Include
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose.bind(this,'priceInclude')} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Devider/>
                    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5px',paddingBottom:'5px'}}>
                        <Typography style={{paddingTop:'10px'}}>Price Exclude</Typography>
                        <Button onClick={this.handleOpen.bind(this,'priceExclude')}>Lihat Selengkapnya</Button>
                        <Dialog
                            open={this.state.priceExclude}
                            onClose={this.handleClose.bind(this,'priceExclude')}
                            scroll={this.state.scroll}
                            aria-labelledby="scroll-dialog-title"
                        >
                            <DialogTitle id="scroll-dialog-title">Detail</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Exclude
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose.bind(this,'priceExclude')} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Devider/>
                    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5px',paddingBottom:'5px'}}>
                        <Typography style={{paddingTop:'10px'}}>Important Notice</Typography>
                        <Button onClick={this.handleOpen.bind(this,'priceExclude')}>Lihat Selengkapnya</Button>
                        <Dialog
                            open={this.state.priceExclude}
                            onClose={this.handleClose.bind(this,'priceExclude')}
                            scroll={this.state.scroll}
                            aria-labelledby="scroll-dialog-title"
                        >
                            <DialogTitle id="scroll-dialog-title">Detail</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Exclude
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose.bind(this,'priceExclude')} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Devider/>
                    <div style={{display:'flex',justifyContent:'space-between',paddingTop:'5px',paddingBottom:'5px'}}>
                        <Typography style={{paddingTop:'10px'}}>Cancellation Pollicy</Typography>
                        <Button onClick={this.handleOpen.bind(this,'priceExclude')}>Lihat Selengkapnya</Button>
                        <Dialog
                            open={this.state.priceExclude}
                            onClose={this.handleClose.bind(this,'priceExclude')}
                            scroll={this.state.scroll}
                            aria-labelledby="scroll-dialog-title"
                        >
                            <DialogTitle id="scroll-dialog-title">Detail</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Exclude
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose.bind(this,'priceExclude')} color="secondary">
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <Devider/>

                </div>
            </div>
        )
    }
}

export default (withStyles(styles)(Destination))