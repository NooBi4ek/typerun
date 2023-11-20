import React, { FC } from 'react';
import TypeRunInput from './components/TypeRunInput.tsx';
import styled from 'styled-components';
import TypeRunText from './components/TypeRunText.tsx';
import { useAppDispatch, useAppSelector } from './hooks.ts';
import {
  handleGreyKeyBoardChange,
  handleTypeWord,
} from './store/typeRunSlice.ts';
import TypeRunKeyBoard from './components/TypeRunKeyBoard.tsx';

const App: FC = () => {
  const typeWordValue = useAppSelector((state) => state.typeRun.typeWordValue);
  const text = useAppSelector((state) => state.typeRun.text);
  const keyboard = useAppSelector((state) => state.typeRun.keyboard);

  const disabledText = text.slice(0, typeWordValue.length);
  const enabledText = text.slice(typeWordValue.length, text.length);

  const dispatch = useAppDispatch();

  const handleTypeChange = (e) => dispatch(handleTypeWord(e.target.value));

  const handleGreyChange = (event) =>
    dispatch(handleGreyKeyBoardChange(event.key));

  return (
    <Wrapper>
      <Container>
        <TypeRunInput value={typeWordValue} onChange={handleTypeChange} />
        <TypeRunText disabledText={disabledText} enabledText={enabledText} />
        <TypeRunKeyBoard keyboard={keyboard} onKeyDown={handleGreyChange} />
      </Container>
    </Wrapper>
  );
};

export default App;

const Container = styled.div`
  width: 1440px;
  max-width: 95%;
  margin: 0 auto;
  padding: 2% 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2d2d2d;
`;
