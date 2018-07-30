import { combineReducers } from 'redux';
import { reducer as formReducer } from "redux-form";
// import OpenLoginBox from './reducer_loginbox';
import TripsReducer from './reducer_trip';
import LoginReducer from './reducer_login';
import AuthReducer from './reducer_auth';
import BannerReducer from './reducer_banner';
import TripDetailReducer from './reducer_tripdetail';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    // OpenLoginBox,
    trips: TripsReducer,
    banners: BannerReducer,
    login: LoginReducer,
    auth: AuthReducer,
    trip: TripDetailReducer,
    form: formReducer
});

export default rootReducer;
