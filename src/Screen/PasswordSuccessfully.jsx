import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const PasswordSuccessfully = ({ navigation }) => {
    return (
      <View style={styles.container}>

        <View style={styles.upperSection}>
          <Image
            source={require('../assest/Images/LoginS.png')}
            style={styles.mainImage}
            resizeMode="contain"
          />
          <Text style={styles.infoText}>
            It is mandatory to set a new password, which should be different from the one provided by the admin.
          </Text>
        </View>
  

        <View style={styles.lowerSection}>
          <Image
            source={require('../assest/Images/done.png')}
            style={styles.successImage}
            resizeMode="contain"
          />
          <Text style={styles.successText}>Password Reset Successfully!</Text>
          <Text style={styles.descriptionText}>
            Your password has been successfully reset. Click below to log in with your new credentials.
          </Text>
  
          
        </View>
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Go to Login</Text>
          </TouchableOpacity>
      </View>
    );
  };
  
  export default PasswordSuccessfully;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C396C',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    upperSection: {
      flex: 1,
      width: '70%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainImage: {
      width: '100%',
      height: '60%',
    },
    infoText: {
      color: '#FFF',
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
      lineHeight: 22,
    },
    lowerSection: {
      width: '100%',
      height: '55%',
      backgroundColor: '#FFF',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      padding: 20,
      alignItems: 'center',
    },
    successImage: {
      width: '60%',
      height: '30%',
      marginBottom: 20,
    },
    successText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1C396C',
      marginBottom: 10,
    },
    descriptionText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#333',
      marginBottom: 30,
      lineHeight: 22,
    },
    loginButton: {
        backgroundColor: 'green',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',},
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: '600',
    },
  });
  