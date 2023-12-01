import {configureStore} from '@reduxjs/toolkit';
import timerReducer from './slices/timerSlice';
import recordsReducer from './slices/recordsSlice';

export default configureStore({
  reducer: {
    timer: timerReducer,
    records: recordsReducer,
  },
});
