import React from 'react';
// Modules
import { MainMenu } from './components/menu/mainMenu';
// Styled Components
import './Reset.css';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ff0000;
  display: flex;
`;

const features = {
  main: {
    menu: true,
    home: true,
    donations: true,
    user_manual: true,
    user:true
  },
  sub: {
    menu: false,
    list: true,
    map: true,
    power: false,
    export: false,
    alarms: false
  }
}


const App = () => {
  return (
    <div className="App">
      <AppContainer>
        {features.main.menu? <MainMenu features={features} user={'Hello'}/> : null}
      </AppContainer>      
    </div>
  );
}

export default App;
