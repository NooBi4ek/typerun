import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  countSecond: number;
  symbolPerMinute: number;
}

const TypeRunCounterSpeed: FC<Props> = ({ countSecond, symbolPerMinute }) => {
  return (
    <Wrapper>
      <TypeRunCounterSpeedText>
        Count Second: {countSecond}
      </TypeRunCounterSpeedText>
      <TypeRunCounterSpeedText>SPM: {symbolPerMinute}</TypeRunCounterSpeedText>
    </Wrapper>
  );
};
export default TypeRunCounterSpeed;

const Wrapper = styled.div`
  float: right;
  display: flex;
  color: #fff;
  user-select: none;
`;

const TypeRunCounterSpeedText = styled.div`
  margin: 0 1vw;
`;
