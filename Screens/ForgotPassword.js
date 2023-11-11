
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import auth from 'firebase/auth';
import { HelperText, TextInput } from 'react-native-paper';
import { View, Logo, Button, FormErrorMessage } from '../components';
import { Images, Colors} from '../config1';
import { initializeApp } from 'firebase/app';
import FBconfig from '../FBconfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const app = initializeApp(FBconfig);

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setemail] = useState("");
  const checkemail = ()=>{
    return !email.includes('@');
  }

  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const onChangeemail = email => setemail(email);
  const handleSignup = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSignUpSuccess(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
<SafeAreaProvider style = {styles.view}>
      <View>
         
      <TextInput 
      value={email}
      left={<TextInput.Icon icon="email" />} 
      placeholder="Địa chỉ Email" 
      onChangeText={
        onChangeemail} />    
      <HelperText type='error' visible ={checkemail()}>
        Email khong hop le !!!
      </HelperText>
      {signUpSuccess && <Text style={{ color: 'green' }}>Đã gửi email reset mật khẩu</Text>}
      <Button style={styles.button} onPress={handleSignup}>
              <Text style={styles.buttonText}>Reset mật khẩu</Text>
        </Button>
        <Button 
        style={styles.borderlessButtonContainer} 
        onPress={() => navigation.navigate("Login")} 
        title={'Quay về đăng nhập'} 
        borderless>
          </Button>
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
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
    
});

