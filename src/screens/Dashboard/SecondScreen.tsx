import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SecondScreen = ({navigation}) => {
  return (
    <View>
      <Text>SecondScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text> Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({});
