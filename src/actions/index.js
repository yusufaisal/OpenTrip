import axios from 'axios';

// const ROOT_URL = "https://sandbox.opentripapp.com";
// const API_KEY = "ops:fVC2AygWV2:gkFBczBifQfJoQLGb2WMENmwG";
const ROOT_URL = "https://api.opentripapp.com";
const API_KEY = "opd:iMyct7jWZathMj1:CJNXV7mYqjUAz3S";
const AXIOS_INSTANCE = axios.create({
    baseURL: ROOT_URL,
    headers: {
        'Authorization':`Bearer ${API_KEY}`,
        'x-api-key':API_KEY
    }
})

export const FETCH_TRIPS = 'fetch_trip';
export const LOGIN = 'login';
export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
export const BANNER = 'banner';
export const TRIPDETAIL = 'trip_detail'

// export function openLoginBox(open) {
//     return {
//         type: 'OPEN_LOGINBOX',
//         payload: open
//     };
// }

export function fetchTripDetail() {
    const request = AXIOS_INSTANCE.get(`${ROOT_URL}/trip/detail?id=5a2d8b75f10a32001148428d`)

    return{
        type: TRIPDETAIL,
        payload: request
    }

}

export function fetchBanner(){
    const request = AXIOS_INSTANCE.get(`${ROOT_URL}/banner`);

    return{
        type: BANNER,
        payload: request
    }
}

export function fetchDataTrips() {
    const request = AXIOS_INSTANCE.get(`${ROOT_URL}/trip/by_explore`);

    return{
        type: FETCH_TRIPS,
        payload: request
    }
}

export function login(values, callback) {
    const request = AXIOS_INSTANCE.post(`${ROOT_URL}/user/login`, values);    
    request.then(()=>{
        callback();
    })
    return{
        type: LOGIN,
        payload: request
    }
}

export function signInAction({email, password}, history) {
    return async (dispatch) => {
        try {
            const res = await AXIOS_INSTANCE.post(`${ROOT_URL}/user/login`, { email, password });
            dispatch({ type: AUTHENTICATED });
            localStorage.setItem('user', res.data.data.access_token)
            history.push('/');
        } catch (error) {
            dispatch({
                type: AUTHENTICATION_ERROR,
                payload: 'Invalid email or password'
            });
        }
    }
}