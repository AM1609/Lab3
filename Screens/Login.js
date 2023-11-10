import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from 'firebase/auth';
import { View, Logo, Button, FormErrorMessage } from '../components';
import { HelperText, TextInput } from 'react-native-paper';
import { Images, Colors} from '../config1';

import { useTogglePasswordVisibility } from '../hooks';
import { loginValidationSchema } from '../utils';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export const LoginScreen = () => {
    const [errorState, setErrorState] = useState('');
    const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
    const handleLogin = (values) => {
    const { email, password } = values;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(
            ({user})=> console.log(user)
            )
        .catch(error =>
            setErrorState(error.message)
        );
    };
    const handleChange = (text, eventName) => {
        setValues((prev) => ({
          ...prev,
          [eventName]: text,
        }));
      };
      const [values, setValues] = useState({
        email: '',
        password: '',
      });
    
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [showpass, setshowpass] = useState(true);
    const passst = () =>{
        setshowpass (!showpass)
      }

    
      const handleSignup = () => {
        const { email, password } = values;
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            setSignUpSuccess(true);
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    return (
        <SafeAreaProvider style={{flex:1}}>
          <View style={styles.logoContainer}>
                <Logo uri={Images.logo} />
                <Text style={styles.screenTitle}>Welcome back!</Text>
        </View>
        <View style={styles.view}>
        {signUpSuccess && <Text style={{ color: 'green' }}>Đăng nhập thành công</Text>}
        <TextInput placeholder="Địa chỉ Email" onChangeText={(text) => handleChange(text, 'email')} />
        <TextInput placeholder="Mật khẩu" 
        onChangeText={(text) => handleChange(text, 'password')} 
        right={<TextInput.Icon icon="eye" onPress={passst}/>} 
        secureTextEntry={showpass}
        /> 
        <View>
        <Button style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Login</Text>
        </Button>
        </View>
      </View>
      </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
    screenTitle: {
      fontSize: 32,
      fontWeight: '700',
      color: Colors.black,
      paddingTop: 20,
      textAlign: 'center',
    },
    logoContainer:{
      alignItems: 'center'
    },
    inputField: {
      padding: 14,
      fontSize: 22,
      width: '90%'
    },

    button: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
      backgroundColor: Colors.orange,
      padding: 10,
      borderRadius: 8,
    },
    buttonText: {
      fontSize: 20,
      color: Colors.white,
      fontWeight: '700',
    },
    borderlessButtonContainer: {
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  