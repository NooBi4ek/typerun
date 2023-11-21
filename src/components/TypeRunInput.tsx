import React, { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TypeRunInput: FC<Props> = ({ value, onChange }) => {
  return (
    <Input
      value={value}
      onChange={onChange}
      onPaste={(e) => e.preventDefault()}
    />
  );
};

export default TypeRunInput;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  width: 100%;
  color: #fff;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;
