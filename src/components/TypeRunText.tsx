import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  disabledText: string;
  enabledText: string;
}

const TypeRunText: FC<Props> = ({ disabledText, enabledText }) => {
  return (
    <>
      <DisabledText>{disabledText}</DisabledText>
      <Text>{enabledText}</Text>
    </>
  );
};

export default TypeRunText;

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
