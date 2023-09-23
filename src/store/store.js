import { configureStore } from '@reduxjs/toolkit';
import activesReducer from './homeSlice';
import detailsReducer from './detailsSlice';
import layoutReducer from './LayoutSlice';

const store = configureStore({
  reducer: {
    actives: activesReducer,
    details: detailsReducer,
    layout: layoutReducer,
  },
});

export default store;
