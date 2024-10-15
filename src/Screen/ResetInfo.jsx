import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import React from 'react';

const ResetInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.imageSection}>
        <Image
          source={require('../assest/Images/info.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      
      <View style={styles.textSection}>
        <Text style={styles.heading}>Contact your Admin</Text>
        <Text style={styles.infoText}>
          Password can only be reset by your admin. Contact the admin and request them to reset your password.
        </Text>
        <Text style={styles.infoText}>
          For the admin's assistance, the steps are:
        </Text>
        <Text style={styles.stepsText}>
          Open Q2Pay → Settings → Users → Select user → Reset password
        </Text>
        <Text style={styles.successText}>Password Reset Successfully</Text>
      </View>

      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('SetPassword')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ResetInfo;

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
    height: '100%',
  },
  textSection: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 70,
  },
  heading: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: '700',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '300',
    marginTop: 15,
    lineHeight: 22,
  },
  stepsText: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '300',
    marginTop: 15,
    lineHeight: 22,
    width: '80%',
  },
  successText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 30,
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
