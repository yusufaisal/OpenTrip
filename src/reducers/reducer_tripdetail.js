import { TRIPDETAIL } from '../actions';


export default function (state={}, action) {
    switch (action.type) {
        case TRIPDETAIL:
            const trip = action.payload.data.data;
            return trip;

        default:
            return state;
    }
}