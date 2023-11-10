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
export const LoginScreen = ({navigation}) => {
    const [errorState, setErrorState] = useState('');
    const { passwordVisibility, handlePasswordVisibility, rightIcon } =
    useTogglePasswordVisibility();
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
      const atLogin = () => {
        navigation.navigate("Home"), 
        handleSignup;
      }
    return (
        <SafeAreaProvider style = {styles.view}>
          
        <View style={styles.logoContainer}>
                <Logo uri={Images.logo} />
                <Text style={styles.screenTitle}>Welcome back!</Text>
        </View>
      <View style={{flex:3}}>
        {signUpSuccess && <Text style={{ color: 'green' }}>Đăng nhập thành công</Text>}
        <TextInput 
        placeholder="Địa chỉ Email" 
        onChangeText={(text) => handleChange(text, 'email')}
        left={<TextInput.Icon icon="email" />}
         />
        <TextInput placeholder="Mật khẩu" 
        onChangeText={(text) => handleChange(text, 'password')} 
        right={<TextInput.Icon icon="eye" onPress={passst}/>}
        left={<TextInput.Icon icon="key" />}  
        secureTextEntry={showpass}
        /> 
        <View>
        <Button style={styles.button} onPress={atLogin}>
            <Text style={styles.buttonText}>Login</Text>
        </Button>
        </View>
        <View>
        <Button style={styles.button} onPress={() => navigation.navigate("Signup")} >
            <Text style={styles.buttonText}>Đăng Ký</Text>
        </Button>
        </View>
      </View>
      </SafeAreaProvider>
    );
};
const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    alignItems: 'center',
    flex:2,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingTop: 20,
    textAlign: 'center',
  },
  button: {
    flex:1,
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
});


  