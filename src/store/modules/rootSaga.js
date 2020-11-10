import { all } from 'redux-saga/effects';

import devices from './devices/sagas';
import status from './status/sagas';

export default function* rootSaga() {
    return yield all([devices, status]);
}