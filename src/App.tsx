import React, { FC, useEffect } from 'react';
import TypeRunInput from './components/TypeRunInput.tsx';
import styled from 'styled-components';
import TypeRunText from './components/TypeRunText.tsx';
import { useAppDispatch, useAppSelector } from './hooks/hooks.ts';
import {
  getTypeRunIsError,
  getTypeRunKeyBoard,
  getTypeRunText,
  getTypeRunTypeWordValue,
  handleTypeWord,
  unMountKey,
} from './store/typeRunSlice.ts';
import TypeRunKeyBoard from './components/TypeRunKeyBoard.tsx';

const App: FC = () => {
  const typeWordValue = useAppSelector(getTypeRunTypeWordValue);
  const text = useAppSelector(getTypeRunText);
  const keyboard = useAppSelector(getTypeRunKeyBoard);
  const isError = useAppSelector(getTypeRunIsError);

  const disabledText = text.slice(0, typeWordValue.length);
  const enabledText = text.slice(typeWordValue.length, text.length);

  const dispatch = useAppDispatch();

  const handleTypeChange = (e) => {
    const keyBoardValue = e.target.value;
    dispatch(handleTypeWord(keyBoardValue));
    setTimeout(() => dispatch(unMountKey(keyBoardValue)), 300);
  };

  return (
    <Wrapper>
      <Container>
        <TypeRunInput value={typeWordValue} onChange={handleTypeChange} />
        <TypeRunText
          disabledText={disabledText}
          enabledText={enabledText}
          isError={isError}
        />
        <TypeRunKeyBoard keyboard={keyboard} />
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
