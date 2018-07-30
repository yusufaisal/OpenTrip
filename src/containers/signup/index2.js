import React from 'react';
import './style2.css';

import People from 'material-ui-icons/AccountCircle';
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

function getStepContent(step,state) {
    switch (step) {
        case 0:
            return (
                <div>
                    {/*title*/}
                    <Typography style={{fontSize:'22px',fontFamily:'Rubik-Bold'}}>Daftar</Typography>
                    <form className="login-form-signup">
                        {/*Content*/}

                        <TextField
                            id="name"
                            placeholder="Nama Lengkap"
                            style={{ textIndent: 30}}
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start">
                                        <People />
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                width:'100%'
                            }}
                        />
                        <TextField
                            id="email"
                            placeholder="Email"
                            // className={classes.textField}
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start">
                                        <Email/>
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
                                        <Lock />
                                    </InputAdornment>
                                )
                            }}
                            style={{width: "100%" }}
                        />

                    </form>
                </div>
            );
        case 1:
            return (
                <div>
                    {/*title*/}
                    <Typography style={{fontSize:'22px',fontFamily:'Rubik-Bold',textTransform:'capitalize'}}>selamat datang, {state.username}</Typography>
                    {/*content*/}
                    <Typography style={{marginTop:12,marginBottom:12,fontSize:'15px',fontFamily:'Rubik-Reguler'}}>Silahkan masukkan nomor HP-mu di bawah sini, ya!</Typography>
                    <Typography style={{fontFamily:'Rubik-Reguler'}}>Jangan khawatir!! Kami tidak akan menyebarluaskan nomormu.{state.username}</Typography>
                    <div style={{display:'flex'}}>
                        <TextField
                            id="select-currency-native"
                            select
                            value={state.currency}
                            // onChange={this.handleChange('phone_code')}
                            SelectProps={{
                                native: true,
                            }}
                            margin="normal"
                            style={{Width:'20px'}}
                        >
                            {codes.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            id="phonenumber"
                            type="number"
                            placeholder="contoh: 81123456789"
                            style={{ textIndent: 30}}
                            // className={classes.textField}
                            margin="normal"
                            style={{
                                width:'80%'
                            }}
                        />
                    </div>

                </div>
            );
        case 2:
            return (
                <div>
                    {/*title*/}
                    <Typography style={{fontSize:'22px',fontFamily:'Rubik-Bold'}}>Kode verifikasi telah kami kirimkan</Typography>
                    {/*content*/}
                    <Typography style={{marginTop:12,marginBottom:12,fontSize:'15px',fontFamily:'Rubik-Reguler'}}>Masukkan 4 digit kode yang kami kirimkanke HP-mu melalui SMS di kolom di bawah ini!</Typography>
                    <div style={{display:'flex'}}>
                        <TextField
                            id="phonenumber"
                            type="number"
                            inputStyle={{fontSize: '100'}}
                            placeholder="1234"
                            InputProps={{
                                classes: {
                                    input: {fontSize:'2.0rem'},
                                },
                            }}
                            // className={classes.textField}
                            margin="normal"
                            style={{
                                width:'60%'
                            }}
                        />
                    </div>

                </div>
            );
        default:
            return 'Finish';
    }
}



class SignUp extends React.Component{
    state = {
        activeStep: 0,
        skipped: new Set(),
        phone_code: 'ID',
        username: '',
        email: '',
        password: '',
    };

    handleNext = (e) => {
        console.log(e);
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
        const steps = getSteps();
        const { activeStep } = this.state;

        return(
            <div className="login-page" style={{display:'flex'}}>
                <div className="main-signup">
                    <div className="banner-signup" >
                        <div style={{flex:'1'}}>
                            <img className="logo-signup" src={logo}/>
                        </div>
                        <div style={{flex:'1',paddingBottom:'20px',position:'absolute',bottom:'0'}}>
                            <Typography style={{fontSize:'28px',fontFamily:'Rubik-Bold'}}>Liburan</Typography>
                            <Typography style={{fontSize:'15px',fontFamily:'Rubik-Bold'}}>dan bertemu</Typography>
                            <Typography style={{fontSize:'19px',fontFamily:'Rubik-Bold'}}>teman baru!</Typography>
                        </div>
                    </div>
                    <div className="form-signup">
                        <div>
                            {activeStep === steps.length ? (
                                <div>
                                    <Typography>
                                        All steps completed - you&quot;re finished
                                    </Typography>
                                    <Button onClick={this.handleReset} className={classes.button}>
                                        Reset
                                    </Button>
                                </div>
                            ) : (
                                <div>
                                    <Typography>{getStepContent(activeStep,this.state)}</Typography>
                                    <div style={{display:'flex',justifyContent:'flex-and'}}>
                                        {activeStep !== 0 &&(<Button
                                            raised
                                            color="secondary"
                                            size="small"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontSize: 14,
                                                borderRadius: 5,
                                                width:"45%",
                                                margin:"1rem"
                                            }}
                                            onClick={this.handleBack}
                                        >
                                            Sebelumnya
                                        </Button>)}

                                        <Button
                                            raised
                                            color="secondary"
                                            size="small"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontSize: 14,
                                                borderRadius: 5,
                                                width:"40%",
                                                margin:"1rem"
                                            }}
                                            onClick={this.handleNext}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : activeStep === 0 ? 'Daftar' :'Lanjutkan'}
                                        </Button>
                                        {activeStep == 0 && (<Link to='login'><p className="message"><a href="#">Sudah memiliki akun</a></p> </Link>)}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SignUp);