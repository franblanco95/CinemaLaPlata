import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.backgroundStyle}>
      <Text>Testing</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
