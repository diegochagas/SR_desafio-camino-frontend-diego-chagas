import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { fetchDevicesFailure, fetchDevicesSuccess, FETCH_DEVICES_REQUEST } from './actions';

export function* fetchDevices() {
    try {
        const response = yield call(api.get, 'devices');

        yield put(fetchDevicesSuccess(response.data)); 
    } catch(err) {
        yield put(fetchDevicesFailure(err));
    }
}

export default all([takeLatest(FETCH_DEVICES_REQUEST, fetchDevices)]);