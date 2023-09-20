import { configureStore } from '@reduxjs/toolkit';
import activesReducer from './homeSlice';
import detailsReducer from './detailsSlice';

const store = configureStore({
  reducer: {
    actives: activesReducer,
    details: detailsReducer,
  },
});

export default store;
