import {Route} from '@react-navigation/native';
import React, {FC} from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Test} from './LoginScreen';

interface Props {
  navigation: any;
  route: Route<string, Test>;
}

const TestScreen: FC<Props> = ({navigation, route}) => {
  const {email, password} = route.params;
  return (
    <SafeAreaView>
      <Text>TestScreen</Text>
      <Text>{email}</Text>
      <Text>{password}</Text>
      <Button title="Atras" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};

export default TestScreen;
