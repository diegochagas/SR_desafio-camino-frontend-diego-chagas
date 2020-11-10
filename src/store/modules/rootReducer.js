import { combineReducers } from 'redux';

import devicesReducer from './devices/reducer';
import statusReducer from './status/reducer';

export default combineReducers({
    devices: devicesReducer,
    status: statusReducer,
});