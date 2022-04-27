import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  navigation: any;
}

const SecondScreen: FC<Props> = ({navigation}) => {
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
