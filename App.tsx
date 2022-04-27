import React from 'react';
import {StyleSheet} from 'react-native';
import MainNavigator from './src/navigator';

const App = () => {
  return <MainNavigator />;
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
