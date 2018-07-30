import { FETCH_TRIPS } from '../actions';


export default function (state={}, action) {
    switch (action.type) {
        case FETCH_TRIPS:
            const trips = action.payload.data.data;
            return trips;

        default:
            return state;
    }
}
