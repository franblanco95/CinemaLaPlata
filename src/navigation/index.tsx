import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import LoginStackNavigator from './LoginNavigator';

function AppNavigator() {
  const [user, setUser] = useState(false);

  return (
    <NavigationContainer>
      {user ? <MainNavigator /> : <LoginStackNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;
