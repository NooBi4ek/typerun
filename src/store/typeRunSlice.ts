import { createSlice } from '@reduxjs/toolkit';
import { Key, keyboard } from './keyboard.ts';
import { StoreType } from './redux.ts';

export interface TypeRunInitialState {
  keyboard: Key[][];
  text: string;
  isError: boolean;
  typeWordValue: string;
}

const initialState: TypeRunInitialState = {
  keyboard,
  text: 'HHHHHHHHH',
  isError: false,
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
      if (state.text.startsWith(state.typeWordValue) == false) {
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

// for (let i = 0; i < text.length; i++) {

//     if (text[i] === " ") {
//       result.push(<span key={i}>&ndnjkd;</span>);
//     } else {

//       const isMatch = inputIndex < input.length && text[i] === input[inputIndex];

//       result.push(
//        <Text isMatch={isMatch}>{text[i]}</Text>
//       );

//     }
//   }

// const fullText = "hello world"
// const inputText = "hello"

// const disabledText = fullText.slice(0, inputText.length);
// const text = fullText.slice(inputText.length, fullText.length);

// <TextDisabled>{disabledText}</TextDisable>
// <Text>{text}</Text>

// 1 a => handleKeyDown => dispatch(changeColor(key)) => {
//   keyboard.map(row => row.map(knopka => knopka.key === key ? {...knopka, isGrey: !knopka.isGrey} : {}))
// }
// 2
