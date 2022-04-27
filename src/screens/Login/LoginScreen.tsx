import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  navigation: any;
}

export interface Test {
  email: string;
  password: string;
}

const LoginScreen: FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <Text>Bienvenido!</Text>
        <TextInput
          placeholder="E-Mail*"
          style={styles.inputContainer}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputContainer}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Test', {email, password})}>
          <Text>Iniciar Sesion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.registerTextStyle}>No tenes una cuenta?</Text>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate('Register')}>
          <Text>Registrate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  inputContainer: {
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    width: '100%',
  },
  loginContainer: {
    width: '100%',
  },
  registerContainer: {
    width: '100%',
  },
  registerTextStyle: {
    textAlign: 'center',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  registerButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
