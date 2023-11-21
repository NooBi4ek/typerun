import { configureStore } from '@reduxjs/toolkit';
import typeRunReducer, { TypeRunInitialState } from './typeRunSlice.ts';

export interface StoreType {
  typeRun: TypeRunInitialState;
}

const store = configureStore({
  reducer: {
    typeRun: typeRunReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
