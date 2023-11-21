import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  disabledText: string;
  enabledText: string;
  isError: boolean;
}

const TypeRunText: FC<Props> = ({ disabledText, enabledText, isError }) => {
  console.log('isError', isError);
  return (
    <Wrapper $isError={isError}>
      <DisabledText>{disabledText}</DisabledText>
      <Text>{enabledText}</Text>
    </Wrapper>
  );
};

export default TypeRunText;

const Wrapper = styled.div<{ $isError: boolean }>`
  background: ${(props) => (props.$isError ? 'red' : '')};
  transition: background 0.2s ease-in-out;
`;

const DisabledText = styled.div`
  text-align: center;
  color: #81b1d4;
  display: inline;
`;

const Text = styled.div`
  text-align: center;
  color: #fff;
  display: inline;
`;
