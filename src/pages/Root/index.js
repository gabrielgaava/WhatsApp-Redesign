import React from 'react';
import {ThemeProvider} from 'styled-components';
// import {useColorScheme} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Themes from '../../styles/theme';

// Components
import Icon from '../../styles/icons';

// Screens
import Chat from '../Chat';
import ChatRoom from '../ChatRoom';
import Calls from '../Calls';
import Settings from '../Settings';

export default function Root() {
  const BottomTab = createBottomTabNavigator();
  //const deviceTheme = useColorScheme();
  const activeTheme = Themes.dark;

  const ChatStack = createStackNavigator();

  function ChatScreen() {
    return (
      <ChatStack.Navigator screenOptions={{headerShown: false}}>
        <ChatStack.Screen name="Chat" component={Chat} />
        <ChatStack.Screen name="ChatRoom" component={ChatRoom} />
      </ChatStack.Navigator>
    );
  }

  return (
    <ThemeProvider theme={activeTheme}>
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Chat"
          tabBarOptions={{
            activeTintColor: Themes.light.primary,
            inactiveTintColor: activeTheme.spanText,
            style: {
              height: 70,
              paddingHorizontal: 70,
              backgroundColor: activeTheme.background,
              borderTopColor: activeTheme.lightBackground,
            },
            showLabel: false,
            tabStyle: {width: 70},
          }}>
          <BottomTab.Screen
            name="Calls"
            component={Calls}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="phone" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="chat" size={size} color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="gear" size={size} color={color} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
