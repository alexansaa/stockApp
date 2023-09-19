import { configureStore } from '@reduxjs/toolkit';
import statementReducer from './homeSlice';

const store = configureStore({
  reducer: {
    statement: statementReducer,
  },
});

export default store;
