import React from 'react';
import {ThemeProvider} from 'styled-components';
import Theme from './styles/theme';

// Screens
import Chat from './pages/Chat';

const App = () => (
  <ThemeProvider theme={Theme.dark}>
    <Chat />
  </ThemeProvider>
);

export default App;
