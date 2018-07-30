import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
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

    handleClickOutside() {
        this.setState({ OpenLoginBoxState: false });
    }

    handleClickOpenLoginBox = () => {
        this.setState({ OpenLoginBoxState: !this.state.OpenLoginBoxState });
    };

    handleMouseDownPassword(event) {
        event.preventDefault();
    };

    handleClickShowPasssword() {
        this.setState({ showPassword: !this.state.showPassword });
    };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    renderEmailField = (field) => {
        const { classes } = this.props;
        const { meta: { touched, error }, input } = field;

        return (
            <FormControl>
                <Input
                    type="text"
                    error={touched && error}
                    style={{ width: "100%", }}
                    placeholder="Email"
                    {...input}
                    classes={{
                        inkbar: touched && error ? classes.redInkbar : classes.greenInkbar,
                        underline: classes.greenUnderline
                    }}
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
                            style={{ outline: "none", width: "2rem" }}>
                            <People style={{ display: "none" }} />
                        </IconButton>
                    </InputAdornment>}
                />
                <FormHelperText id="name-error-text">{touched && error ? field.meta.error : ''}</FormHelperText>
            </FormControl>

        );
    }

    renderPasswordField = (field) => {
        const { classes } = this.props;
        const { meta: { touched, error }, input } = field;
        return (
            <FormControl style={{ marginTop: "0.3rem" }}>
                <Input
                    id="adornment-password"
                    error={touched && error}
                    type={this.state.showPassword ? 'text' : 'password'}
                    style={{ textIndent: 30, width: "100%" }}
                    classes={{
                        inkbar: touched && error ? classes.redInkbar : classes.greenInkbar,
                        underline: classes.greenUnderline
                    }}
                    // disableUnderline={true}
                    placeholder="Password"
                    {...input}
                    startAdornment={
                        <InputAdornment
                            position="start"
                            style={{ textIndent: 0, marginRight: 0 }}>
                            <IconButton
                                disableRipple={true}
                                style={{ outline: "none" }}>
                                <Lock />
                            </IconButton>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment
                            position="end"
                            style={{ textIndent: 0, marginLeft: 0 }}>
                            <IconButton
                                onClick={this.handleClickShowPasssword.bind(this)}
                                onMouseDown={this.handleMouseDownPassword.bind(this)}
                            >
                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <FormHelperText id="name-error-text">{touched && error ? field.meta.error : ''}</FormHelperText>
            </FormControl>
        );
    }

    onSubmit(values) {
        // this.props.login(values, () => {
        // this.props.history.push("/create_trip");
        // console.log(this.props.history);
        // console.log("MY HISTO", this.props.history);

        // });
        // console.log("VAL", values);

    }

    submit (values) {        
        this.props.signInAction(values, this.props.history)
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
                    width: "20rem",
                    paddingTop: "1rem"
                }}>
                    <div className="container">
                        <h6 style={{
                            marginBottom: "1.5rem"
                        }}>Masuk ke akun Anda</h6>
                        <form onSubmit={handleSubmit(this.submit.bind(this))}>
                            <Field
                                name="email"
                                component={this.renderEmailField} />
                            <Field
                                name="password"
                                component={this.renderPasswordField.bind(this)} />
                            <a href="#"
                                style={{
                                    color: "#009688",
                                    float: "right",
                                    marginBottom: "2rem",
                                    marginTop: "0.5rem"
                                }}>
                                Lupa password anda?
                                </a>
                            <Button
                                type="submit"
                                raised
                                color="secondary"
                                style={{
                                    outline: "none",
                                    textTransform: "capitalize",
                                    fontSize: 18,
                                    borderRadius: 5,
                                    width: "100%",
                                    marginBottom: "1rem"
                                }}>
                                Masuk
                                </Button>
                        </form>
                        <div
                            className="text-center"
                            style={{ marginBottom: "1rem" }}>
                            <span style={{ width: "100%", textAlign: "center" }}>
                                Belum memiliki akun? <a href="#" style={{ color: "#009688", }}>Daftar</a>
                            </span>
                        </div>
                    </div>
                    <Divider style={{
                        height: 1,
                        marginBottom: "1rem",
                        background: "#000000"
                    }} />
                    <div className="container">
                        <div
                            className="text-center"
                            style={{ marginBottom: "1rem" }}>
                            <span style={{ width: "100%", textAlign: "center" }}>
                                Atau masuk menggunakan
                                </span>
                        </div>

                        <div className="row">
                            <div className="container">
                                <Button
                                    raised
                                    color="secondary"
                                    style={{
                                        outline: "none",
                                        textTransform: "capitalize",
                                        fontSize: 18,
                                        borderRadius: 5,
                                        width: "48%",
                                        marginBottom: "1rem",
                                        marginRight: "2%"
                                    }}>
                                    FB
                                    </Button>
                                <Button
                                    raised
                                    color="secondary"
                                    style={{
                                        outline: "none",
                                        textTransform: "capitalize",
                                        fontSize: 18,
                                        borderRadius: 5,
                                        width: "48%",
                                        marginBottom: "1rem",
                                        marginLeft: "2%"
                                    }}>
                                    Google
                                    </Button>
                            </div>
                        </div>
                    </div>
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