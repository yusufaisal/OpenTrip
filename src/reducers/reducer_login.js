import { LOGIN } from '../actions';

export default function(state={}, action){
    switch (action.type) {
        case LOGIN:
            const login = action.payload;
            return login;
            
        default:
            return state;
    }
}