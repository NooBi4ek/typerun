import React, { FC } from 'react';
import styled from 'styled-components';
import { Key } from '../store/keyboard';

interface Props {
  keyboard: Key[][];
}

const TypeRunKeyBoard: FC<Props> = ({ keyboard }) => {
  return (
    <>
      {keyboard.map((row, id) => {
        return (
          <KeyBoard key={id}>
            {row.map((keyboardBtn) => (
              <KeyBoardKey
                key={keyboardBtn.id}
                $btnGrey={keyboardBtn.buttonGrey}
              >
                {keyboardBtn.key}
              </KeyBoardKey>
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

const KeyBoardKey = styled.div<{ $btnGrey: boolean }>`
  padding: 2vh 1vw;
  margin: 0.5vh 0.5vw;
  border: 1px solid #000;
  border-radius: 5px;
  background: ${(props) => (props.$btnGrey ? '#7a7a7a' : '#fff')};
  transition: background 0.2s ease-in-out;
`;
