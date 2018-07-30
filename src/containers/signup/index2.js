import React from 'react';
import Form from '../../components/signup';
import './style.css';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper from 'material-ui/Stepper';
import Step,{StepLabel}from 'material-ui/Stepper'
import Button from 'material-ui/Button';

import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import {InputAdornment} from 'material-ui/Input/';
import {Link} from 'react-router-dom'


const logo = "/images/logo.png";
const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },

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

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <div>
                    <Typography className='title-panel'>Daftar</Typography>
                    <TextField
                        id="name"
                        placeholder="Nama Lengkap"
                        // className={classes.textField}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/*<AccountCircle />*/}
                                </InputAdornment>
                            ),
                        }}
                        style={{
                            width:'10v0&'
                        }}
                    />
                    <TextField
                        id="email"
                        placeholder="Email"
                        // className={classes.textField}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/*<AccountCircle />*/}
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="password"
                        placeholder="Password"
                        // className={classes.textField}
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {/*<AccountCircle />*/}
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
            );
        case 1:
            return (
                <form className="register-form-signup">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="email address"/>
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p>
                </form>
            );
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}

class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            OpenLoginBoxState: false,
            amount: '',
            password: '',
            weight: '',
            showPassword: false,
            email: '',
            activeStep: 0,
            skipped: new Set(),
        }
    }

    isStepOptional = step => {
        return step === 1;
    };

    handleNext = () => {
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

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
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

    render(){

        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return(
            <div style={{alignContent:'center'}}>
                <div className="container-home3" >
                    <div className="card">
                        <img className="logo" src={logo}/>
                        <div style={{alignContent:'flex-end'}}>
                            <Typography style={{fontSize:'20px'}}>Liburan</Typography>
                            <Typography className='word2'>dan bertemu</Typography>
                            <Typography className='word3'>teman baru!</Typography>
                        </div>
                    </div>
                    <div className="form">
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
                                    <Typography>{getStepContent(activeStep)}</Typography>
                                    <div>
                                        {activeStep !== 0 &&(<Button
                                            raised
                                            color="secondary"
                                            size="small"
                                            style={{
                                                outline: "none",
                                                textTransform: "capitalize",
                                                fontSize: 14,
                                                borderRadius: 5,
                                                width:"100%",
                                                marginTop:"1rem"
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
                                                width:"30%",
                                                marginTop:"1rem"
                                            }}
                                            onClick={this.handleNext}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Daftar'}
                                        </Button>
                                        {activeStep == 0 && (<Link to=''><Typography>Sudah memiliki akun</Typography>   </Link>)}
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

export default SignUp;