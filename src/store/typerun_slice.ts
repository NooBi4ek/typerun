import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  btn_arr: [
    {
      str1: [
        { id: 1, key: 'Q', buttonGrey: false },
        { id: 2, key: 'W', buttonGrey: false },
        { id: 3, key: 'E', buttonGrey: false },
        { id: 4, key: 'R', buttonGrey: false },
        { id: 5, key: 'T', buttonGrey: false },
        { id: 6, key: 'Y', buttonGrey: false },
        { id: 7, key: 'U', buttonGrey: false },
        { id: 8, key: 'I', buttonGrey: false },
        { id: 9, key: 'O', buttonGrey: false },
        { id: 10, key: 'P', buttonGrey: false },
      ],
    },
    {
      str2: [
        { id: 11, key: 'A', buttonGrey: false },
        { id: 12, key: 'S', buttonGrey: false },
        { id: 13, key: 'D', buttonGrey: false },
        { id: 14, key: 'F', buttonGrey: false },
        { id: 15, key: 'G', buttonGrey: false },
        { id: 16, key: 'H', buttonGrey: false },
        { id: 17, key: 'J', buttonGrey: false },
        { id: 18, key: 'K', buttonGrey: false },
        { id: 19, key: 'L', buttonGrey: false },
      ],
    },
    {
      str3: [
        { id: 20, key: 'Z', buttonGrey: false },
        { id: 21, key: 'X', buttonGrey: false },
        { id: 22, key: 'C', buttonGrey: false },
        { id: 23, key: 'V', buttonGrey: false },
        { id: 24, key: 'B', buttonGrey: false },
        { id: 25, key: 'N', buttonGrey: false },
        { id: 26, key: 'M', buttonGrey: false },
      ],
    },
  ],
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    changeButton(state, action) {
      state.btn_arr.map((keyboard) => {
        keyboard.str1?.map((str) => {
          if (str.key === action.payload.toUpperCase()) {
            str.buttonGrey = true;
          }
        });
        keyboard.str2?.map((str) => {
          if (str.key === action.payload.toUpperCase()) {
            str.buttonGrey = true;
          }
        });
        keyboard.str3?.map((str) => {
          if (str.key === action.payload.toUpperCase()) {
            str.buttonGrey = true;
          }
        });
      });
      console.log(JSON.stringify(state.btn_arr));
    },
    unmountButton(state) {
      state.btn_arr.map((keyboard) => {
        keyboard.str1?.map((str) => {
          str.buttonGrey = false;
        });
        keyboard.str2?.map((str) => {
          str.buttonGrey = false;
        });
        keyboard.str3?.map((str) => {
          str.buttonGrey = false;
        });
      });
    },
  },
});
export const { changeButton, unmountButton } = typeSlice.actions;
export default typeSlice.reducer;
