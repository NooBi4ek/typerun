import { configureStore } from '@reduxjs/toolkit';
import typeReducer from './typerun_slice.ts';
const store = configureStore({
  reducer: {
    type: typeReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
