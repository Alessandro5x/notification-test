import React from 'react';
import styled from 'styled-components';
import NotificationForm from './components/NotificationForm';
import LogHistory from './components/LogHistory';

const AppContainer = styled.div`
  text-align: center;
  background-color: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #333;
`;

function App() {
  return (
    <AppContainer>
      <Title>Notification System</Title>
      <NotificationForm />
      <LogHistory />
    </AppContainer>
  );
}

export default App;