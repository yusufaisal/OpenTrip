import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import { withStyles } from 'material-ui/styles';
import { Link } from "react-router-dom";

import './style.css';


import MyAccount from '../../components/my-account';

const styles = theme => ({
    list: {
        width: 250,
    },
    listFull: {
        width: 'auto',
    },
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -10,
        marginRight: 20,
    },
    tripLeaderButton: {
        outline: "none",
        textTransform: "capitalize",
        fontSize: 16
    }
});


class NavBar extends Component {
    state = {
        open: false,
        selectedDate: new Date(),
        // openLoginBox: false
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="fixed" className="parent" style={{backgroundColor:'#23384d'}} >
                    <Toolbar className="toolbar">
                        <Typography type="title" color="inherit" className={classes.flex}>
                            <Link to="/" style={{marginLeft:58}}>
                                <img src="images/logo.png" style={{height:50}}/>
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(NavBar);