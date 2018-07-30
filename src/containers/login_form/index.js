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


const email_logo = "/images/email.png";
const password_logo = "/images/email.png";
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

const codes =[
    {
        value: 'ID',
        label: '+62',
    },
    {
        value: 'MY',
        label: '+11',
    },
];

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

class LoginForm extends React.Component{
    state = {
        activeStep: 0,
        skipped: new Set(),
        phone_code: 'ID',
        username: '',
        email: '',
        password: '',
    };

    handleNext = (e) => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };
    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };
    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };
    isStepSkipped(step) {
        return this.state.skipped.  has(step);
    }
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    render(){
        const { classes } = this.props;

        return(
            <div className="login-page" style={{display:'flex'}}>
                <div className="main-signup">
                    <div className="banner-signup" >
                        <div style={{flex:'1'}}>
                            <img className="logo-signup" src={logo}/>
                        </div>
                        <div style={{flex:'1',paddingBottom:'20px',position:'absolute',bottom:'0'}}>
                            <Typography style={{fontSize:'41px',fontFamily:'Rubik-Bold'}}>Liburan</Typography>
                            <Typography style={{fontSize:'20px',fontFamily:'Rubik-Bold'}}>dan bertemu</Typography>
                            <Typography style={{fontSize:'25px',fontFamily:'Rubik-Bold'}}>teman baru!</Typography>
                        </div>
                    </div>
                    <div className="form-signup">
                        <div style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}}>
                            <div style={{flex:1}}>
                                {/*title*/}
                                <Typography style={{fontSize:'22px',fontFamily:'Rubik-Bold'}}>Masuk</Typography>
                                <form className="login-form-signup">
                                    {/*Content*/}
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
                                            width:'100%'
                                        }}
                                    />
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
                                        style={{width: "100%",margin:"0" }}
                                    />

                                </form>
                            </div>
                            <div style={{flex:1,display:'flex',paddingBottom:'30px',position:'absolute',bottom:'0',width:'100%'}}>
                                <Button
                                    raised
                                    color="secondary"
                                    size="small"
                                    style={{
                                        outline: "none",
                                        textTransform: "capitalize",
                                        fontFamily: "Rubik-Light",
                                        fontSize: 14,
                                        borderRadius: 2,
                                        maxWidth:"15%",
                                        marginRight:"1rem",
                                        padding:"0.6rem",
                                    }}
                                    onClick={this.handleNext}
                                >
                                    Login
                                </Button>
                                <Link to='/signup'><p className="message"><a href="#">Sudah memiliki akun</a></p> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForm);