import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  navigation: any;
}
const HomeScreen: FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Second')}>
        <Text>Go Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
  },
});
