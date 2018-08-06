import React from 'react';
import './style.css';

import Email from 'material-ui-icons/Email';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Visibility from 'material-ui-icons/Visibility';
import Lock from 'material-ui-icons/Lock';

import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import {withStyles} from 'material-ui/styles'
import Input from 'material-ui/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import {InputAdornment} from 'material-ui/Input/';
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {signInAction} from "../../actions";
import { Field, reduxForm } from 'redux-form';


const email_logo = "/images/email.png";
const password_logo = "/images/password.png";
const logo = "/images/logo.png";
const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        fontSize: 100, //works!
    }
});

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:'' ,
        };
    }

    submit (values) {
        console.log("test");
        this.props.signInAction(values, this.props.history)
    }

    onSubmit(e) {
        e.preventDefault()
        let { email, password } = this.state;
        console.log(this.state)
    }

    renderEmail = () => {
        return(
            <TextField
                id="email"
                placeholder="Email"
                // className={classes.textField}
                margin="normal"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img src={email_logo} style={{width:"80%",height:"auto",marginBottom:"5px"}}/>
                        </InputAdornment>
                    ),
                }}
                style={{
                    width:'100%',marginTop:"0"
                }}
                onChange={event => this.setState({email: event.target.value})}
            />
        )
    };

    renderPassword = () => {
        return(
            <TextField
                id="password"
                placeholder="Password"
                type='password'
                margin="normal"
                // onChange={this.handleChange('password')}

                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" >
                            <img src={password_logo} style={{width:"80%",height:"auto",marginBottom:"5px"}}/>
                        </InputAdornment>
                    )
                }}
                style={{width: "100%",marginTop:"6px" }}
                onChange={event => this.setState({password: event.target.value})}
            />
        )
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div className="login-page">
                <div className="main-login">
                    <div className="banner-login" >
                        <div style={{flex:'1'}}>
                            <img className="logo-login" src={logo}/>
                        </div>
                        <div>
                            <a style={{fontSize:'33px',fontFamily:'Rubik-Bold',margin:0}}>Yuk Liburan!</a><br/>
                            <a style={{fontSize:'20px',fontFamily:'Rubik-Bold'}}>Teman barumu sudah menanti!</a>
                        </div>
                    </div>
                    <div className="form-login">
                        <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <div>
                                {/*title*/}
                                <a className='title-login'>Masuk</a>
                                <form onSubmit={this.onSubmit.bind(this)} className="login-form">
                                    {/*Content*/}
                                    <Field
                                        name="email"
                                        component={this.renderEmail}
                                    />
                                    <Field
                                        name="password"
                                        component={this.renderPassword}
                                    />
                                    <div style={{flex:1,display:'flex',paddingBottom:'30px',position:'absolute',bottom:'0',width:'100%'}}>
                                        <Button
                                            raised
                                            type = "submit"
                                            color="secondary"
                                            size="small"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontFamily: "Rubik-Light",
                                                fontSize: 14,
                                                borderRadius: 2,
                                                minWidth:"18%",
                                                marginRight:"1rem",
                                                padding:"0.6rem",
                                            }}
                                        >
                                            Masuk
                                        </Button>
                                        <Link to='/signup' refresh="true"><p className="message-login"><a href="#">Belum memiliki akun</a></p> </Link>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

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

export default reduxForm({
    form: 'LoginForm',
    validate
})(connect(null, { signInAction })(withStyles(styles)(LoginForm)));