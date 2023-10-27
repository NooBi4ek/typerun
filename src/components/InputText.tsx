import React, { useEffect } from 'react';
import { Wrapper, Text } from '../styled/SApp';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { onKey } from '../store/typerun_slice.ts';
const InputText: React.FC = () => {
  const text = useAppSelector((state) => state.type.text);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      dispatch(onKey({ event }));
    });
    return () => {
      document.removeEventListener('keydown', (event) => {
        dispatch(onKey({ event }));
      });
    };
  }, []);
  return (
    <Wrapper>
      <Text>
        {text.split('').map((el) => (
          <Text>{el}</Text>
        ))}
      </Text>
    </Wrapper>
  );
};
export default InputText;
