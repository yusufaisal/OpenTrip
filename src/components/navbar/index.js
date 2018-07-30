import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/Icon';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Search from 'material-ui-icons/Search';
import DateRange from 'material-ui-icons/DateRange';
import People from 'material-ui-icons/PeopleOutline';

import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import { DatePicker } from 'material-ui-pickers';
import { Link } from "react-router-dom";
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { connect } from 'react-redux';
// import { openLoginBox } from '../../actions/index';

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

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    handleClickOpenLoginBox = () => {
        // console.log("before", this.state.openLoginBox);
        // this.setState({ openLoginBox: !this.state.openLoginBox });
        // console.log("after", this.state.openLoginBox);
        // console.log("ini isinya",this.props.OpenLoginBoxState);
        // this.props.openLoginBox(!this.props.OpenLoginBoxState);
    };
    

    render() {
        const { classes } = this.props;
        
        const { selectedDate } = this.state;
        const sideList = (
            <div className={classes.list}>
                <div style={{ textAlign:"center"}} >
                    <img src="/images/logo.png" style={{ height: "10rem", outline: "none" }} />  
                </div>
                {/* <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List> */}
                <div className="container" style={{ marginTop: "4rem", fontFamily: "Rubik-Reguler", fontSize:"1.1em" }}>
                    <div>
                        <b >Menjadi Trip Leader</b><br/>
                        Dan Dapatkan Penghasilan
                    </div>
                    
                    <div style={{ marginTop: "4rem" }}>
                        <span>
                            Susun perjalananmu dan tawarkan melalui Open Trip <b>Gratis!</b>
                        </span>
                        <Link to='/signup' style={{textDecoration:"none"}}>
                            <Button
                                raised
                                color="secondary"
                                size="medium"
                                style={{
                                    outline: "none",
                                    textTransform: "capitalize",
                                    fontSize: 18,
                                    borderRadius: 5,
                                    width:"100%",
                                    marginTop:"1rem"
                                }}>
                                Daftar
                            </Button>
                        </Link>
                    </div>
                </div>

                <div style={{ marginTop: "3rem", width:"100%" }}>
                    <Divider />
                    <ListItem button >
                        <i><ListItemText primary="Tentang Open Trip" /></i>
                    </ListItem>
                    <Divider />
                    <ListItem button >
                        <i><ListItemText primary="Testimoni" /></i>
                    </ListItem>
                    <Divider />
                </div>
            </div>
        );

        return (
            <div>
                <Drawer 
                    open={this.state.left} 
                    onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <AppBar position="fixed" className="parent" style={{backgroundColor:'#faed38'}} >
                    <Toolbar className="toolbar">
                        <IconButton
                            onClick={this.toggleDrawer('left', true)}
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            style={{ fontSize: 40, outline: "none" }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex}>
                            <Link to="/">
                                <img src="images/logo.png" style={{height:50}}/>
                            </Link>
                        </Typography>
                        <div style={{
                            position: 'relative',
                            backgroundColor: "white",
                            marginRight: 20,
                            paddingRight: 8,
                            paddingTop: 2,
                            borderRadius: 5,
                            border:"1px solid #BDBDBD",
                            top: 1
                        }} className="d-none d-xl-block">
                            <Search style={{ position: 'absolute', left: 0, top: 7, width: 24, height: 24, marginLeft: 6 }} />
                            <TextField
                                style={{ textIndent: 30, paddingLeft: 35 }}
                                placeholder="Destinasi"
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                        </div>
                        <div style={{
                            position: 'relative',
                            backgroundColor: "white",
                            marginRight: 20,
                            paddingRight: 8,
                            paddingTop: 2,
                            borderRadius: 5,
                            border: "1px solid #BDBDBD",
                            top: 1
                        }} className="d-none d-xl-block">
                            <DateRange style={{ position: 'absolute', left: 0, top: 7, width: 24, height: 24, marginLeft: 6 }} />
                            {/* <TextField
                                style={{ textIndent: 30, paddingLeft: 35 }}
                                placeholder="Tanggal"
                                InputProps={{
                                    disableUnderline: true
                                }}
                            /> */}
                            <DatePicker
                                value={selectedDate}
                                onChange={this.handleDateChange}
                                leftArrowIcon={<Icon> keyboard_arrow_left </Icon>}
                                rightArrowIcon={<Icon> keyboard_arrow_right </Icon>}
                                InputProps={{
                                    disableUnderline: true
                                }}
                                placeholder="Tanggal"
                                style={{ textIndent: 30, paddingLeft: 35 }}
                            />
                        </div>
                        <div style={{
                            position: 'relative',
                            backgroundColor: "white",
                            marginRight: 20,
                            paddingRight: 8,
                            paddingTop: 2,
                            borderRadius: 5,
                            border: "1px solid #BDBDBD",
                            top: 1,
                            width: "12rem",
                            fontFamily: "Rubik-Reguler"
                        }} className="d-none d-xl-block">
                            <People style={{ position: 'absolute', left: 0, top: 7, width: 24, height: 24, marginLeft: 6 }} />
                            <TextField
                                style={{ textIndent: 30, paddingLeft: 35 }}
                                placeholder="Trip Leader"
                                InputProps={{
                                    disableUnderline: true
                                }}
                            />
                        </div>
                        <MyAccount history={this.props.history}/>
                        {/* <div>
                            <div style={{
                                position: 'relative',
                                backgroundColor: "white",
                                marginRight: 20,
                                paddingRight: 8,
                                paddingTop: 6,
                                paddingBottom: 6,
                                borderRadius: 5,
                                width: "12rem",
                                cursor: "pointer"
                            }} className="d-none d-xl-block" onClick={this.handleClickOpenLoginBox}>
                                <AccountCircle style={{ position: 'absolute', left: 0, width: 24, height: 24, marginLeft: 6 }} />
                                <span style={{ marginLeft: "3.5rem", fontSize: 16 }}>Akun saya</span>
                                <ExpandMore style={{ float:"right" }}/>
                                {this.props.OpenLoginBoxState ? <ExpandLess style={{ float: "right" }} /> : <ExpandMore style={{ float: "right" }} />}
                            </div>    

                        </div> */}
                        <Link to="/create_trip" style={{
                            textDecoration:"none"
                        }}>
                            <Button 
                                raised 
                                color="secondary" 
                                size="medium" 
                                style={{
                                    outline: "none",
                                    textTransform: "capitalize",
                                    fontSize: 16,
                                    borderRadius: 5,
                                    fontFamily: "Rubik-Reguler"}}>
                                Menjadi Trip Leader
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

// NavBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(NavBar);
// function mapStateToProps(state) {
//     return {
//         OpenLoginBoxState: state.OpenLoginBox
//     };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// export default withStyles(styles)(connect(mapStateToProps, { openLoginBox })(NavBar));        