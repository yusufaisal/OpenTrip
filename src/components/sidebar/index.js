import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import SendIcon from 'material-ui-icons/Send';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import StarBorder from 'material-ui-icons/StarBorder';
import Divider from 'material-ui/Divider';

import './style.css';
import TextField from 'material-ui/TextField/TextField';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});

class SideBar extends Component {
    state = {
        openKategori: false,
        openZona: false,
        openHarga: false,
        openTripLeader: false,
        openTanggal: false,
    }

    handleClickKategori = () => {
        this.setState({ openKategori: !this.state.openKategori });
    };
    handleClickZona = () => {
        this.setState({ openZona: !this.state.openZona });
    };
    handleClickHarga = () => {
        this.setState({ openHarga: !this.state.openHarga });
    };
    handleClickTripLeader = () => {
        this.setState({ openTripLeader: !this.state.openTripLeader });
    };
    handleClickTanggal = () => {
        this.setState({ openTanggal: !this.state.openTanggal });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List
                    component="nav"
                    subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
                    className="list-sorting">
                    <Divider style={{ background: "black" }}/>
                    <ListItem button onClick={this.handleClickKategori}>
                        <ListItemText className="Item" inset primary="Kategori" />
                        {this.state.openKategori ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.openKategori} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider style={{ background: "black" }}/>
                    <ListItem button onClick={this.handleClickZona}>
                        <ListItemText className="Item" inset primary="Zona" />
                        {this.state.openZona ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.openZona} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider style={{ background: "black" }}/>
                    <ListItem button onClick={this.handleClickHarga}>
                        <ListItemText className="Item" inset primary="Harga" />
                        {this.state.openHarga ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.openHarga} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText className="Item" inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider style={{ background: "black" }}/>
                    <ListItem button onClick={this.handleClickTripLeader}>
                        <ListItemText className="Item" inset primary="Trip Leader" />
                        {this.state.openTripLeader ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.openTripLeader} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText className="Item" inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider style={{ background: "black" }}/>
                    <ListItem button onClick={this.handleClickTanggal}>
                        <ListItemText className="Item" inset primary="Tanggal" />
                        {this.state.openTanggal ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.openTanggal} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <Divider style={{ background: "black" }}/>
                </List>
            </div>
        );
    }
}
SideBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SideBar);