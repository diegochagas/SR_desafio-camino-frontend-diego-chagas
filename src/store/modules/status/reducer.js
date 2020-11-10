import { CHANGE_STATUS_FAILURE, CHANGE_STATUS_REQUEST, CHANGE_STATUS_SUCCESS } from "./actions"

const INITIAL_STATE = { isLoading: false }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_STATUS_REQUEST:
            return { name: action.payload.readingName, isLoading: true };
        case CHANGE_STATUS_SUCCESS:
            return { ...action.payload.status, isLoading: false };
        case CHANGE_STATUS_FAILURE:
            return { ...action.payload.status, isLoading: false };
        default:
            return { ...state, isLoading: false };
        
    }
}