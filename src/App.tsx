import React from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks.ts';
import { KeyBoard, KeyBoardButton } from './styled/SApp.js';
import { keyboard } from '@testing-library/user-event/dist/keyboard/index.js';
const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const typerun = useAppSelector((state) => state.type.btn_arr);
  return (
    <KeyBoard>
    {typerun.map(keyboard=>)}
    </KeyBoard>
  );
};
export default App;
