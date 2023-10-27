import styled from 'styled-components';

export const Key = styled.div`
  padding: 1vw 2vh;
  margin: 0.1vw 0.5vh;
  border: 1px solid #000;
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

export const Background = styled.div`
  background-color: #2d2d2d;
`;
export const Text = styled.div`
  color: #fff;
`;
