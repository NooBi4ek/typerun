import React from 'react';
import KeyBoard from './components/KeyBoardComponents.tsx';
import InputText from './components/InputText.tsx';
import { Background } from './styled/SApp.js';
const App: React.FC = () => {
  return (
    <Background>
      <InputText />
      <KeyBoard />
    </Background>
  );
};
export default App;
