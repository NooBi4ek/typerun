import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { Key, Wrapper } from '../styled/SApp';
import { changeButton, unmountButton } from '../store/typerun_slice.ts';

const KeyBoard: React.FC = () => {
  const dispatch = useAppDispatch();
  const typerun = useAppSelector((store) => store.type.btnArr);
  const onKey = (event) => {
    dispatch(changeButton(event.key));
    setTimeout(() => {
      dispatch(unmountButton());
    }, 500);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydow', onKey);
    };
  }, []);
  return (
    <>
      {typerun.map((keyboard) => {
        return (
          <Wrapper>
            {keyboard.str.map((btn) => (
              <Key key={btn.id} buttonGrey={btn.buttonGrey}>
                {btn.key}
              </Key>
            ))}
          </Wrapper>
        );
      })}
    </>
  );
};
export default KeyBoard;
