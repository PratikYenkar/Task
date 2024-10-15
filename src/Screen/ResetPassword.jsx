import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSetPassword = async () => {
    try {
      const storedPassword = await AsyncStorage.getItem('userPassword');

      if (oldPassword !== storedPassword) {
        Alert.alert('Error', 'Old password does not match!');
        return;
      }
      if (newPassword !== confirmPassword) {
        Alert.alert('Error', 'New password and confirm password do not match!');
        return;
      }
      if (newPassword.length < 5) {
        Alert.alert('Error', 'Password must be at least 5 characters long!');
        return;
      }

      await AsyncStorage.setItem('userPassword', newPassword);
      Alert.alert('Success', 'Password changed successfully!');
      navigation.navigate('PasswordSuccessfully');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.imageSection}>
        <Image
          source={require('../assest/Images/LoginS.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.infoText}>
          It is mandatory to set a new password, which should be different from the one provided by the admin.
        </Text>
      </View>

      
      <View style={styles.formSection}>
        <Text style={styles.heading}>Set New Password</Text>

        <Text style={styles.label}>Old Password</Text>
        <TextInput
          placeholder="Enter old password"
          secureTextEntry
          value={oldPassword}
          onChangeText={setOldPassword}
          maxLength={10}
          style={styles.input}
        />

        <Text style={styles.label}>New Password</Text>
        <TextInput
          placeholder="Enter new password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          maxLength={10}
          style={styles.input}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Confirm new password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          maxLength={10}
          style={styles.input}
        />
      </View>

      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleSetPassword}
      >
        <Text style={styles.buttonText}>Set New Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C396C',
    alignItems: 'center',
  },
  imageSection: {
    flex: 1,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  infoText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    lineHeight: 22,
  },
  formSection: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FFF',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1C396C',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
  },
  loginButton: {
    backgroundColor: 'green',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
