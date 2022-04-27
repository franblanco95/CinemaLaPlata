import React, {FC} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

interface Props {
  navigation: any;
}

const RegisterScreen: FC<Props> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text>RegisterScreen</Text>
      <Button title="atras" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
