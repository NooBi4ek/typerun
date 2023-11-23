import React, { FC, useState } from 'react';
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
import TypeRunCounterSpeed from './components/TypeRunCounterSpeed.tsx';

const App: FC = () => {
  const typeWordValue = useAppSelector(getTypeRunTypeWordValue);
  const text = useAppSelector(getTypeRunText);
  const keyboard = useAppSelector(getTypeRunKeyBoard);
  const isError = useAppSelector(getTypeRunIsError);

  const [symbolPerMinute, setSymbolPerMinute] = useState<number>(0);
  const [interValCount, setIntervalCount] = useState<number>(0);
  const [interValId, setInterValId] = useState<NodeJS.Timeout | null>(null);

  const disabledText = text.slice(0, typeWordValue.length);
  const enabledText = text.slice(typeWordValue.length, text.length);

  const dispatch = useAppDispatch();

  const handleTypeChange = (e) => {
    const keyBoardValue = e.target.value;
    dispatch(handleTypeWord(keyBoardValue));
    setTimeout(() => dispatch(unMountKey(keyBoardValue)), 300);
    if (interValId == null) {
      const interval = setInterval(
        () => setIntervalCount((prev) => prev + 1),
        1000,
      );
      setInterValId(interval);
    }
    if (text === keyBoardValue && interValId) {
      setSymbolPerMinute((text.length / interValCount) * 60);
      clearInterval(interValId);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TypeRunCounterSpeed
          countSecond={interValCount}
          symbolPerMinute={symbolPerMinute}
        />
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
