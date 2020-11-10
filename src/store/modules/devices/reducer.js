import { FETCH_DEVICES_FAILURE, FETCH_DEVICES_REQUEST, FETCH_DEVICES_SUCCESS } from "./actions"

const INITIAL_STATE = { isLoading: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DEVICES_REQUEST:
            return { isLoading: true };
        case FETCH_DEVICES_SUCCESS:
            return { data: action.payload.devices.data, isLoading: false };
        case FETCH_DEVICES_FAILURE:
            return { ...action.payload.err, isLoading: false };
        default:
            return { ...state, isLoading: false };
        
    }
}