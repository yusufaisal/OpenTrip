import React, { Component } from 'react';
import _ from 'lodash';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import StarRatings from 'react-star-ratings';
import TextTruncate from 'react-text-truncate'; 

import './style.css';

class ItemList extends Component {

    render() {
        return (
            <div className="row" style={{paddingTop:15}}>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://storage.googleapis.com/tempatwisataunik/2016/01/pantai-iboih.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                <span className="province-name">
                                    <h2>Aceh</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="http://www.fabholidays.in/web/image/bali-01.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Bali</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="http://anekatempatwisata.com/wp-content/uploads/2014/03/Pantai-Tanjung-Layar.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Banten</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://wisatalengkap.com/wp-content/uploads/2017/02/DSC_0366.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Bengkulu</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://2.bp.blogspot.com/-TWdUtmfpphg/WGejBZ-f1wI/AAAAAAAADX8/jDPLe4n_28APx15ZJQAE9omAMlcX5B29wCLcB/s640/Pulau%2BCinta.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Gorontalo</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://tempatwisataseru.com/wp-content/uploads/2016/03/Kepulauan-Seribu.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Jakarta</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://i0.wp.com/kompaswisata.com/wp-content/uploads/2017/02/Candi-Muaro-Jambi.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Jambi</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="http://anekatempatwisata.com/wp-content/uploads/2017/07/Green-Canyon-Pangandaran.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Jabar</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://tempatwisataseru.com/wp-content/uploads/2015/11/Dieng.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Jateng</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="http://blog.reservasi.com/wp-content/uploads/2017/06/Argapura-Lumajang-800x533.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Jatim</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="http://anekatempatwisata.com/wp-content/uploads/2014/09/Taman-Nasional-Teluk-Cenderawasih.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Papua</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" style={{
                    height:"12rem",
                    marginBottom:"2rem"
                }}>
                    <div className="province-item">
                        <div style={{
                            height: "100%"
                        }}>
                            <img src="https://cimg.antaranews.com/cache/lampung/730x487/2014/03/20140326raja-ampat-google-com-260314.jpg" className="image-responsive" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className= "image-desc">
                                
                                <span className="province-name">
                                    <h2>Papbar</h2>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ItemList;