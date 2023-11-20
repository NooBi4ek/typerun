import React, { FC, ChangeEventHandler, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  keyboard: Key[];
  onKeyDown: ChangeEventHandler<HTMLDivElement>;
}

interface Key {
  id: boolean;
  key: string;
  buttonGrey: boolean;
}

const TypeRunKeyBoard: FC<Props> = ({ keyboard, onKeyDown }) => {
  return (
    <>
      {keyboard.map((row) => {
        return (
          <KeyBoard>
            {row.map((keyboardBtn) => (
              <KeyBoardKey key={keyboardBtn.id}>{keyboardBtn.key}</KeyBoardKey>
            ))}
          </KeyBoard>
        );
      })}
    </>
  );
};

export default TypeRunKeyBoard;

const KeyBoard = styled.div`
  display: flex;
  justify-content: center;
`;

const KeyBoardKey = styled.div`
  padding: 2vh 1vw;
  margin: 0.5vh 0.5vw;
  border: 1px solid #000;
  border-radius: 5px;
  color: ${(props) => (props.btnGrey ? '#7a7a7a' : '#fff')};
`;
