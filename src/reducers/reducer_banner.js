import { BANNER } from '../actions';


export default function (state={}, action) {
    switch (action.type) {
        case BANNER:
            const banners = action.payload.data.data;
            return banners;

        default:
            return state;
    }
}