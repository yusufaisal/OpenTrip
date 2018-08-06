import React from 'react';
import './style2.css';

import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles'
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import {InputAdornment} from 'material-ui/Input/';
import {Link} from 'react-router-dom'

const user_logo = "/images/user-dark.png";
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

const codes =[
    {
        value: 'ID',
        label: '+62',
    },
    {
        value: 'MY',
        label: '+60',
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
                    <a style={{fontSize:'22px',fontFamily:'Rubik-Bold'}}>Daftar</a>
                    <form className="signup-form">
                        {/*Content*/}
                        <TextField
                            id="name"
                            placeholder="Nama Lengkap"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={user_logo} style={{width:"80%",height:"auto",marginBottom:"5px"}}/>
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                width:'100%',marginTop:"0"
                            }}
                            value={state.username}
                        />
                        <TextField
                            id="email"
                            placeholder="Email"
                            margin="normal"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={email_logo} style={{width:"80%",height:"auto",marginBottom:"5px"}}/>
                                    </InputAdornment>
                                ),
                            }}
                            style={{
                                width:'100%',marginTop:"6px"
                            }}
                            value ={state.email}
                        />
                        <TextField
                            id="password"
                            placeholder="Password"
                            type='password'
                            margin="normal"

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <img src={password_logo} style={{width:"80%",height:"auto",marginBottom:"5px"}}/>
                                    </InputAdornment>
                                )
                            }}
                            style={{width: "100%",marginTop:"6px" }}
                            value={state.password}
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
                    <div className="signup-form">
                        <Typography style={{marginTop:12,marginBottom:12,fontSize:'15px',fontFamily:'Rubik-Reguler'}}>Silahkan masukkan nomor HP-mu di bawah sini, ya!</Typography>
                        <Typography style={{fontFamily:'Rubik-Reguler'}}>Jangan khawatir!! Kami tidak akan menyebarluaskan nomormu.{state.username}</Typography>
                        <div style={{display:'flex'}}>
                            <TextField
                                id="select-currency-native"
                                select
                                value={state.phone_code}
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
                                // className={classes.textField}
                                margin="normal"
                                style={{
                                    width:'80%',
                                    textIndent: 30,marginTop:"21px"
                                }}
                                value={state.phone_number}
                            />
                        </div>
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
                            id="code"
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
        phone_number:null,
        username: null,
        email: null,
        password: null,
    };

    handleNext = (e) => {
        console.log()
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        if(this.state.activeStep===0){
            this.setState({
                username: document.getElementById('name').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
            })
        } else if(this.state.activeStep===1){
            this.setState({
                phone_number: document.getElementById('phonenumber').value,
            })
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
            <div className="signup-page" style={{display:'flex'}}>
                <div className="main-signup">
                    <div className="banner-signup" >
                        <div style={{flex:'1'}}>
                            <img className="logo-signup" src={logo}/>
                        </div>
                        <div>
                            <a style={{fontSize:'41px',fontFamily:'Rubik-Bold'}}>Liburan</a><br/>
                            <a style={{fontSize:'20px',fontFamily:'Rubik-Bold'}}>dan bertemu</a><br/>
                            <a style={{fontSize:'25px',fontFamily:'Rubik-Bold'}}>teman baru!</a>
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
                                    {getStepContent(activeStep,this.state)}
                                    <div style={{flex:1,display:'flex',paddingBottom:'30px',position:'absolute',bottom:'0',width:'100%'}}>
                                        {activeStep !== 0 &&(<Button
                                            raised
                                            color="secondary"
                                            size="small"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontFamily: "Rubik-Light",
                                                fontSize: 14,
                                                borderRadius: 2,
                                                maxWidth:"18%",
                                                marginRight:"1rem",
                                                padding:"0.6rem",
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
                                                fontFamily: "Rubik-Light",
                                                fontSize: 14,
                                                borderRadius: 2,
                                                maxWidth:"18%",
                                                marginRight:"1rem",
                                                padding:"0.6rem",
                                            }}
                                            onClick={this.handleNext}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : activeStep === 0 ? 'Daftar' :'Lanjutkan'}
                                        </Button>
                                        {activeStep == 0 && (<Link refresh="true" to='/login'><p className="message-signup"><a href="#">Sudah memiliki akun</a></p> </Link>)}
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