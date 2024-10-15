import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
     
      <View style={styles.imageContainer}>
        <Image
          source={require('../assest/Images/login.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Reset')}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C396C',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: '100%',
    height: '55%',
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  forgotText: {
    color: '#1C396C',
    fontSize: 16,
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: 'green',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
