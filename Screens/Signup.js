
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
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
  const [rightIcon, setRightIcon] = useState('eye');
  const passst = () =>{
    if (rightIcon == 'eye') {
      setRightIcon('eye-off');
      setshowpass (!showpass);
    } else if (rightIcon == 'eye-off') {
      setRightIcon('eye');
      setshowpass (!showpass);
    }
  };
  const [showrepass, setshowrepass] = useState(true);
  const [rightreIcon, setreRightIcon] = useState('eye');
  const repassst = () =>{
    if (rightIcon == 'eye') {
      setreRightIcon('eye-off');
      setshowrepass (!showpass);
    } else if (rightIcon == 'eye-off') {
      setreRightIcon('eye');
      setshowrepass (!showpass);
    }
  };
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
      <View>
          <View style={styles.logoContainer}>
                <Logo uri={Images.logo} />
                <Text style={styles.screenTitle}>Create a new account!</Text>
          </View>
      {signUpSuccess && <Text style={{ color: 'green' }}>Đăng ký thành công.</Text>}
      <View style={{flex:2}}>
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
      right={<TextInput.Icon icon={rightIcon} onPress={passst} />} 
      placeholder="Mật khẩu" 
      onChangeText={
        setpassword
      } 
      secureTextEntry={showpass} /> 
      <TextInput
      value={repassword}
      left={<TextInput.Icon icon="key" />} 
      right={<TextInput.Icon icon={rightreIcon} onPress={repassst}/>} 
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
        <Button 
        style={styles.borderlessButtonContainer} 
        onPress={() => navigation.navigate("Login")} 
        title={'Đã có tài khoản ?'} 
        borderless>
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
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
    
});

