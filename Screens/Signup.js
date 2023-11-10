
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from 'firebase/auth';
import { HelperText, TextInput } from 'react-native-paper';
import { View, Logo, Button, FormErrorMessage } from '../components';
import { Images, Colors} from '../config1';
import { initializeApp } from 'firebase/app';
import FBconfig from '../FBconfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const app = initializeApp(FBconfig);

export default function SignUpScreen({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [repassword, setrepassword] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const checkemail = ()=>{
    return !email.includes('@');
  }
  const checkepass = ()=>{
    if (repassword == password)
      {
        return false
      }
  }
  const [showpass, setshowpass] = useState(true);
  const passst = () =>{
    setshowpass (!showpass)
  }
  const [showrepass, setshowrepass] = useState(true);
  const repassst = () =>{
    setshowrepass (!showrepass)
  }
  const onChangeemail = email => setemail(email);
  const handleSignup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSignUpSuccess(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
<SafeAreaProvider style = {styles.view}>
      <View style={{flex:2}}>
          <View style={styles.logoContainer}>
                <Logo uri={Images.logo} />
                <Text style={styles.screenTitle}>Create a new account!</Text>
          </View>
      {signUpSuccess && <Text style={{ color: 'green' }}>Đăng ký thành công.</Text>}
      <View style={{flex:3}}>
      <TextInput 
      value={email}
      left={<TextInput.Icon icon="email" />} 
      placeholder="Địa chỉ Email" 
      onChangeText={
        onChangeemail} />
      <HelperText type='error' visible ={checkemail()}>
        Email khong hop le !!!
      </HelperText>
      <TextInput
      value={password}
      left={<TextInput.Icon icon="key" />} 
      right={<TextInput.Icon icon="eye" onPress={passst} />} 
      placeholder="Mật khẩu" 
      onChangeText={
        setpassword
      } 
      secureTextEntry={showpass} /> 
      <TextInput
      value={repassword}
      left={<TextInput.Icon icon="key" />} 
      right={<TextInput.Icon icon="eye" onPress={repassst}/>} 
      placeholder="Nhập lại mật khẩu" 
      onChangeText={
        setrepassword
      } 
      secureTextEntry={showrepass} /> 
      <HelperText type='error' visible ={checkepass()}>
        Mật khẩu không giống
      </HelperText>
      </View>
      
      <View>
      <Button style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Đăng Ký</Text>
      </Button>
      
      </View>
      <View>
      <Button style={styles.button} onPress={() => navigation.navigate("Login")} >
            <Text style={styles.buttonText}>Đăng nhập</Text>
        </Button>
      </View>
      
    </View>
</SafeAreaProvider>
    
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer:{
    alignItems: 'center'
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

