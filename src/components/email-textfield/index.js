import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

import People from 'material-ui-icons/PeopleOutline';

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

class EmailTextField extends Component {
    
    render() {
        const { classes } = this.props;

        return (
            <FormControl>
                <Input
                    error={this.props.touched && this.props.error}
                    style={{ width: "100%", marginBottom:"1rem" }}
                    placeholder="Email"
                    {...this.props.input}
                    classes={{ 
                        inkbar: this.props.touched && this.props.error ? classes.Inkbar : classes.greenInkbar, 
                        underline: classes.greenUnderline }}
                    startAdornment={
                        <InputAdornment
                            position="start"
                            style={{ textIndent: 0, marginRight: 0 }}>
                            <IconButton
                                disableRipple={true}
                                style={{ outline: "none" }}>
                                <People />
                            </IconButton>
                        </InputAdornment>
                    }
                    endAdornment={<InputAdornment
                            position="start"
                            style={{ textIndent: 0, marginRight: 0 }}>
                            <IconButton
                                disableRipple={true}
                                style={{ outline: "none", width:"2rem" }}>
                                <People style={{ display:"none" }}/>
                            </IconButton>
                        </InputAdornment>}
                />
                {/* <FormHelperText id="name-error-text">Error</FormHelperText> */}
            </FormControl>
        );
    }
}

export default withStyles(styles)(EmailTextField);