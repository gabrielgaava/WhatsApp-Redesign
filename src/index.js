import React from 'react';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';
import Themes from './styles/theme';

// Screens
import Chat from './pages/Chat';

export default function App() {

  const deviceTheme = useColorScheme();
  console.log(deviceTheme);
  const theme = Themes[deviceTheme] || theme.dark;

  return (
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  );

}

