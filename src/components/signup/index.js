import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

import './signup_style.css';

class SignUp extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='container'>
                <TextField
                    id="username"
                    label="username"
                    value=""
                />
            </div>
        );
}
}

export default SignUp;