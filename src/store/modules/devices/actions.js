export const FETCH_DEVICES_REQUEST = "FETCH_DEVICES_REQUEST";
export const FETCH_DEVICES_SUCCESS = "FETCH_DEVICES_SUCCESS";
export const FETCH_DEVICES_FAILURE = "FETCH_DEVICES_FAILURE";

export function fetchDevicesRequest() {
    return {
        type: FETCH_DEVICES_REQUEST,
    }
}

export function fetchDevicesSuccess(devices) {
    return {
        type: FETCH_DEVICES_SUCCESS,
        payload: { devices },
    }
}

export function fetchDevicesFailure(err) {
    return {
        type: FETCH_DEVICES_FAILURE,
        payload: { err }       
    }
}
