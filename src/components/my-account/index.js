import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import {Field, reduxForm} from 'redux-form';

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

import Login from '../../containers/login';
import ManageAccount from '../../containers/manage-account';

// import { login } from '../../actions';
import { signInAction } from '../../actions';

import'./style.css';

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

class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            OpenLoginBoxState: false,
            amount: '',
            password: '',
            weight: '',
            showPassword: false,
            email:''
        }
    }    
    
    handleClickOutside() {
        this.setState({ OpenLoginBoxState: false });
    }

    handleClickOpenLoginBox = () => {
        this.setState({ OpenLoginBoxState: !this.state.OpenLoginBoxState });
    };

    handleMouseDownPassword (event) {
        event.preventDefault();
    };

    handleClickShowPasssword() {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    submit = (values) => {
        this.props.signInAction(values, this.props.history)
    }

    handleBox = () => {
        if (this.props.authenticated && !this.props.error) {
            return (
                <div>
                    <ManageAccount openBox={this.state.OpenLoginBoxState} history={this.props.history} />
                </div>
            );
        } else {
            return (
                <div >
                    <Login openBox={this.state.OpenLoginBoxState} history={this.props.history} />
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div style={{
                    position: 'relative',
                    backgroundColor: "white",
                    marginRight: 20,
                    paddingRight: 8,
                    paddingTop: 6,
                    paddingBottom: 6,
                    borderRadius: 5,
                    border: "1px solid #BDBDBD",
                    width: "12rem",
                    cursor: "pointer",
                    fontFamily: "Rubik-Reguler"
                }} className="d-none d-xl-block" onClick={this.handleClickOpenLoginBox}>
                    <AccountCircle style={{ position: 'absolute', left: 0, width: 24, height: 24, marginLeft: 6 }} />
                    <span style={{
                        marginLeft: "3.5rem",
                        fontSize: 14 }}>Akun saya</span>
                    {/* <ExpandMore style={{ float:"right" }}/> */}
                    {this.state.OpenLoginBoxState ? <ExpandLess style={{ float: "right" }} /> : <ExpandMore style={{ float: "right" }} />}
                </div>
                
                {this.handleBox()}
                
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

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        error: state.auth.error
    };
}

export default reduxForm({
    form: 'LoginForm',
    validate
})(connect(mapStateToProps, { signInAction })(withStyles(styles)(onClickOutside(MyAccount))));

// export default reduxForm({
//     form: 'LoginForm',
//     validate
// })(connect(null, { login } )(withStyles(styles)(onClickOutside(Login))));
// export default Login;