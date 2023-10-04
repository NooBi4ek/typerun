import styled from 'styled-components';

export const KeyBoard = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 30vw;
  justify-content: space-around;
  margin-bottom: 0.05vh;
`;

export const Key = styled.div`
  padding: 1vw 2vh;

  border: 1px solid #a7a7a7;
  background-color: ${(props) => (props.buttonGrey ? '#A7A7A7' : '#fff')};
`;

export const KeyBoardButton = styled.button`
  width: 7vw;
  height: 7vh;
`;
