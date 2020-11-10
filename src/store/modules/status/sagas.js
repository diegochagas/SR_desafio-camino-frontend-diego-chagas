import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { changeStatusFailure, changeStatusSuccess, CHANGE_STATUS_REQUEST } from './actions';

export function* changeStatus({ payload }) {
    const { readingName, stateValue } = payload;

    try {
        const response = yield call(api.patch, `/devices/${readingName}?active=${stateValue}`);

        yield put(changeStatusSuccess({ message: response.data, name: readingName, active: stateValue })); 
    } catch(err) {
        yield put(changeStatusFailure({ message: err.response.data, name: readingName, error: true }));
    }
}

export default all([takeLatest(CHANGE_STATUS_REQUEST, changeStatus)]);