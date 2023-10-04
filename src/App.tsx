import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { Key, KeyBoard } from './styled/SApp.js';
import { keyboard } from '@testing-library/user-event/dist/keyboard/index.js';
import { changeButton, unmountButton } from './store/typerun_slice.ts';
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const typerun = useAppSelector((state) => state.type.btn_arr);

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
      {typerun.map((keyboard) => (
        <>
          <KeyBoard>
            {keyboard.str1?.map((str) => (
              <Key buttonGrey={str.buttonGrey}>{str.key}</Key>
            ))}
          </KeyBoard>
          <KeyBoard>
            {keyboard.str2?.map((str) => (
              <Key buttonGrey={str.buttonGrey}>{str.key}</Key>
            ))}
          </KeyBoard>
          <KeyBoard>
            {keyboard.str3?.map((str) => (
              <Key buttonGrey={str.buttonGrey}>{str.key}</Key>
            ))}
          </KeyBoard>
        </>
      ))}
    </>
  );
};
export default App;
