import React, { Component } from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Search from 'material-ui-icons/Search';
import Create from 'material-ui-icons/Create';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';


import './style.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'female',
        }
    }
    
    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        return (
            <div>
                <footer className="py-5 footer">
                    <div className="text-center" style={{marginBottom:"2rem"}}>
                        <span style={{ width: "100%", textAlign: "center", color:"white" }}>
                            <h1 style={{fontFamily:"Rubik-Medium"}}>Apa Itu Open Trip?</h1>
                        </span>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md">
                            <div style={{float:"right", color:"white"}}>
                                <h4 style={{ color: "white", fontFamily: "Rubik-Reguler"}}>Bahasa</h4>
                                <FormControl component="fieldset" required >
                                    <RadioGroup
                                        aria-label="gender"
                                        name="gender1"
                                        value={this.state.value}
                                        onChange={this.handleChange}>
                                        <FormControlLabel value="id" control={<Radio style={{ color:"white" }}/>} label="Indonesia" />
                                        <FormControlLabel value="en" control={<Radio style={{ color:"white" }}/>} label="Inggris" />
                                        
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            <div className="row" style={{paddingLeft:"2rem"}}>
                                <div className="col-1">
                                    <Search style={{ 
                                        color:"white",
                                        height:"3rem",
                                        width: "3rem"}}/>
                                </div>
                                <div className="col-8" style={{paddingLeft:"2.5rem"}}>
                                    <h4 style={{ color: "white", fontFamily: "Rubik-Reguler", marginBottom: "1rem" }}>Temukan Perjalanan</h4>
                                    <span style={{ color: "white", fontSize: "0.9rem" }}>
                                        Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. 
                                        Duis dignissim ac velit eget porttitor. 
                                        Mauris vel libero sed lacus posuere... <a href="#" style={{ color:"#009688" }}>Lihat lebih lanjut ></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            <div className="row">
                                <div className="col-1">
                                    <div className="col-1">
                                        <Create style={{
                                            color: "white",
                                            height: "3rem",
                                            width: "3rem"
                                        }} />
                                    </div>          
                                </div>
                                <div className="col-8" style={{ paddingLeft: "3.5rem" }}>
                                    <h4 style={{ color: "white", fontFamily: "Rubik-Reguler", marginBottom: "1rem" }}>Jadi Trip Leader</h4>
                                    <span style={{ color: "white", fontSize: "0.9rem" }}>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                        Duis dignissim ac velit eget porttitor.
                                        Mauris vel libero sed lacus posuere... <a href="#" style={{ color: "#009688" }}>Lihat lebih lanjut ></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <footer className="py-5 footer-2">
                    <div className="row">
                        <div className="col-12 col-md-7" style={{paddingLeft:"17rem"}}>
                            <div style={{ 
                                width:"100%",
                                marginBottom:"2rem" }}>
                                <h1 style={{ fontFamily: "Rubik-Medium" }}>Dapatkan Aplikasinya!</h1>
                                <a href="#"
                                    style={{
                                        color: "#009688"
                                    }}>
                                    Lihat lebih lanjut >
                                </a>
                            </div>
                            <div className="row" style={{ marginBottom:"3rem" }}>
                                <div className="col-12 col-md-1">
                                    <div style={{
                                        position: 'relative',
                                        backgroundColor: "white",
                                        marginRight: 20,
                                        paddingRight: 8,
                                        paddingTop: 2,
                                        borderRadius: 5,
                                        border: "2px solid #BDBDBD",
                                        top: 1,
                                        width: "4rem"
                                    }} className="d-none d-xl-block">
                                        {/* <People style={{ position: 'absolute', left: 0, top: 7, width: 24, height: 24, marginLeft: 6 }} /> */}
                                        <TextField
                                            style={{ textIndent: 30, paddingLeft: 35 }}
                                            placeholder="Orang"
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-5" style={{ paddingLeft: "2rem"}}>
                                    <div style={{
                                        position: 'relative',
                                        backgroundColor: "white",
                                        marginRight: 20,
                                        paddingRight: 8,
                                        paddingTop: 2,
                                        borderRadius: 5,
                                        border: "2px solid #BDBDBD",
                                        top: 1,
                                        width: "100%"
                                    }} className="d-none d-xl-block">
                                        {/* <People style={{ position: 'absolute', left: 0, top: 7, width: 24, height: 24, marginLeft: 6 }} /> */}
                                        <TextField
                                            style={{ textIndent: 30, paddingLeft: 35 }}
                                            placeholder="Orang"
                                            InputProps={{
                                                disableUnderline: true
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-5" style={{ paddingLeft:0 }}>
                                    <Button
                                        raised
                                        color="secondary"
                                        size="medium"
                                        style={{
                                            outline: "none",
                                            textTransform: "capitalize",
                                            fontSize: 18,
                                            borderRadius: 5,
                                            paddingLeft:"3rem",
                                            paddingRight:"3rem"
                                        }}>
                                        Kirim link
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <span>
                                    <img src="images/app-store-button.png" style={{ height: "3rem" }} />
                                    <img src="images/google-play-button.png" style={{ height: "3rem" }} />
                                </span>
                            </div>

                        </div>
                        <div className="col-6 col-md-5" style={{ paddingLeft:"8rem" }}>
                            <img src="images/OpenTripHP.png" style={{ height:"25rem" }}/>
                        </div>
                    </div>
                </footer>
                <footer className="py-4 footer" style={{color:"white"}}>
                    <div className="row" >
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="footer-container footer-padding" >
                                <div className="row">
                                    <span className="col-sm-12 col-md col-lg" ><a href="">Tentang</a></span>
                                    <span className="col-sm-12 col-md col-lg"><a href="">Bantuan</a></span>
                                    <span className="col-sm-12 col-md col-lg"><a href="">FAQ</a></span>
                                    <span className="col-sm-12 col-md col-lg"><a href="">Karir</a></span>
                                    <span className="col-sm-12 col-md col-lg"><a href="">Privasi</a></span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="copyright">
                                <span >OpenTrip 2018</span>
                            </div>
                        </div>
                        
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;