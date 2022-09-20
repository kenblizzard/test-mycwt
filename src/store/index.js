import { configureStore } from '@reduxjs/toolkit';
import DogsReducer from './reducers/dogs-reducer';

export const store = configureStore({
  reducer: {
    dogsReducer: DogsReducer,
  },
});
