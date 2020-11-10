export const CHANGE_STATUS_REQUEST = "CHANGE_STATUS_REQUEST";
export const CHANGE_STATUS_SUCCESS = "CHANGE_STATUS_SUCCESS";
export const CHANGE_STATUS_FAILURE = "CHANGE_STATUS_FAILURE";

export function changeStatusRequest(readingName, stateValue) {
    return {
        type: CHANGE_STATUS_REQUEST,
        payload: { readingName, stateValue },
    }
}

export function changeStatusSuccess(status) {
    return {
        type: CHANGE_STATUS_SUCCESS,
        payload: { status },
    }
}

export function changeStatusFailure(status) {
    return {
        type: CHANGE_STATUS_FAILURE,
        payload: { status }       
    }
}