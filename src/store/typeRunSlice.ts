import { createSlice } from '@reduxjs/toolkit';
import { Key, keyboard } from './keyboard.ts';
import { StoreType } from './redux.ts';

export interface TypeRunInitialState {
  keyboard: Key[][];
  text: string;
  isError: boolean;
  symbolPerMinute: number;
  countSecond: number;
  typeWordValue: string;
}

const initialState: TypeRunInitialState = {
  keyboard,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  isError: false,
  symbolPerMinute: 0,
  countSecond: 0,
  typeWordValue: '',
};

export const typeRunSlice = createSlice({
  name: 'typeRun',
  initialState: initialState,
  reducers: {
    handleTypeWord(state, action) {
      const inputValue = action.payload;
      const lastLetter = inputValue.substring(inputValue.length - 1);
      state.typeWordValue = inputValue;
      console.log('lastLetter', lastLetter);
      if (!state.text.startsWith(state.typeWordValue)) {
        state.typeWordValue = state.typeWordValue.slice(0, -1);
        state.isError = true;
        return;
      }
      state.keyboard = state.keyboard.map((row) => {
        return row.map((keyboardBtn) =>
          keyboardBtn.key.toLowerCase() === lastLetter.toLowerCase()
            ? { ...keyboardBtn, buttonGrey: !keyboardBtn.buttonGrey }
            : keyboardBtn,
        );
      });
    },

    unMountKey(state, action) {
      const inputValue = action.payload;
      const lastLetter = inputValue.substring(inputValue.length - 1);
      state.keyboard = state.keyboard.map((row) => {
        return row.map((keyboardBtn) => {
          return keyboardBtn.key.toLowerCase() === lastLetter.toLowerCase()
            ? { ...keyboardBtn, buttonGrey: false }
            : keyboardBtn;
        });
      });
      state.isError = false;
    },
  },
});

export const getTypeRunText = (state: StoreType) => state.typeRun.text;
export const getTypeRunKeyBoard = (state: StoreType) => state.typeRun.keyboard;
export const getTypeRunTypeWordValue = (state: StoreType) =>
  state.typeRun.typeWordValue;
export const getTypeRunIsError = (state: StoreType) => state.typeRun.isError;

export const { handleTypeWord, unMountKey } = typeRunSlice.actions;

export default typeRunSlice.reducer;
