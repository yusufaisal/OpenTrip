import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {MenuItem,MenuList} from 'material-ui/Menu';
import {Link} from 'react-router-dom';

import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';

import AccountCircle from 'material-ui-icons/AccountCircle';
import ExpandMore from 'material-ui-icons/ExpandMore';
import ExpandLess from 'material-ui-icons/ExpandLess';
import People from 'material-ui-icons/PeopleOutline';
import Lock from 'material-ui-icons/LockOutline';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

import EmailTextField from '../../components/email-textfield';

// import { login } from '../../actions';
import { signInAction } from '../../actions';

import './style.css';

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OpenLoginBoxState: false,
            amount: '',
            password: '',
            weight: '',
            showPassword: false,
            email: ''
        }
    }

    logout(){
        localStorage.clear();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div style={{
                position: "fixed",
                display: this.props.openBox ? "block" : "none",
                right: "14.5rem", marginTop: "0.2rem"
            }}>
                <Paper style={{
                    width: "15rem",
                    paddingTop: "1rem"
                }}>
                    <MenuList>
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <Link style={{color:'black',textDecoration:'none'}} to="/signup"><MenuItem onClick={this.logout()}>Logout</MenuItem></Link>
                    </MenuList>
                </Paper>
            </div>

        );
    }
}

// function mapStateToProps(state) {
//     return {
//         OpenLoginBoxState: state.OpenLoginBox
//     };
// }

function validate(values) {
    const errors = {};
    const requiredFields = [
        'email',
        'password',
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }
    return errors;
}

// export default connect(mapStateToProps, { openLoginBox })(onClickOutside(Login));
export default reduxForm({
    form: 'LoginForm',
    validate
})(connect(null, { signInAction })(withStyles(styles)(onClickOutside(Login))));
// export default reduxForm({
//     form: 'LoginForm',
//     validate
// })(connect(null, { login } )(withStyles(styles)(onClickOutside(Login))));
// export default Login;