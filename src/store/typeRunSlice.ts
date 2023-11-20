import { createSlice } from '@reduxjs/toolkit';
import { keyboard } from './keyboard.ts';

export const typeRunSlice = createSlice({
  name: 'typeRun',
  initialState: { keyboard, text: 'Hello world', typeWordValue: '' },
  reducers: {
    handleTypeWord(state, action) {
      const inputValue = action.payload;
      state.typeWordValue = inputValue;
      if (state.text.startsWith(state.typeWordValue) == false) {
        state.typeWordValue = state.typeWordValue.slice(0, -1);
      }
    },
    handleGreyKeyBoardChange(state, action) {
      state.keyboard.map((row) => {
        return row.map((keyboardBtn) =>
          keyboardBtn.key.toLowerCase() === action.payload.toLowerCase()
            ? { ...keyboardBtn, buttonGrey: !keyboardBtn.buttonGrey }
            : {},
        );
      });
    },
  },
});

export const { handleTypeWord, handleGreyKeyBoardChange } =
  typeRunSlice.actions;

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
