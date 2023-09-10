import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  btn_arr: [
    {
      str1: [
        { id: 1, key: 'Q' },
        { id: 2, key: 'W' },
        { id: 3, key: 'E' },
        { id: 4, key: 'R' },
        { id: 5, key: 'T' },
        { id: 6, key: 'Y' },
        { id: 7, key: 'U' },
        { id: 8, key: 'I' },
        { id: 9, key: 'O' },
        { id: 10, key: 'P' },
      ],
    },
    {
      str2: [
        { id: 11, key: 'A' },
        { id: 12, key: 'S' },
        { id: 13, key: 'D' },
        { id: 14, key: 'F' },
        { id: 15, key: 'G' },
        { id: 16, key: 'H' },
        { id: 17, key: 'J' },
        { id: 18, key: 'K' },
        { id: 19, key: 'L' },
      ],
    },
    {
      str3: [
        { id: 20, key: 'Z' },
        { id: 21, key: 'X' },
        { id: 22, key: 'C' },
        { id: 23, key: 'V' },
        { id: 24, key: 'B' },
        { id: 25, key: 'N' },
        { id: 26, key: 'M' },
      ],
    },
  ],
};

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {},
});
export const {} = typeSlice.actions;
export default typeSlice.reducer;
