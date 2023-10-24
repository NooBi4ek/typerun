import styled from 'styled-components';

export const Key = styled.div`
  padding: 1vw 2vh;

  border: 1px solid #a7a7a7;
  background-color: ${(props) => (props.buttonGrey ? '#A7A7A7' : '#fff')};
`;

export const KeyBoardButton = styled.button`
  width: 7vw;
  height: 7vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
