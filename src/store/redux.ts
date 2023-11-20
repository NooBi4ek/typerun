import { configureStore } from '@reduxjs/toolkit';
import typeRunReducer from './typeRunSlice.ts';
const store = configureStore({
  reducer: {
    typeRun: typeRunReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
