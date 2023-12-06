// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Pressable, TextInput, Keyboard } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import { firebase } from '../config';
// import Toast from 'react-native-toast-message';
// import { Appbar, Button } from 'react-native-paper';
// import {Colors} from '../config1'

// export default function HomeScreen ({ navigation }) {
//   return(
//     <View>
//       <View>
//       <Text>Home</Text>
//     </View>
//     <View>
//       <Button style={styles.button} onPress={() => navigation.navigate("Login")}>
//             <Text style={styles.buttonText}>Đăng Xuất</Text>
//       </Button>
//       </View>
//     </View>
    
    
//   )
// }
// const styles = StyleSheet.create({
//   view: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer:{
//     alignItems: 'center'
//   },
//   screenTitle: {
//     fontSize: 32,
//     fontWeight: '700',
//     color: Colors.black,
//     paddingTop: 20,
//     textAlign: 'center',
//   },
//   button: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 8,
//     backgroundColor: Colors.orange,
//     padding: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: Colors.white,
//     fontWeight: '700',
//   },
// });

