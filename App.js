import React, { useState, useEffect } from 'react';
// import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
// import { initializeApp } from 'firebase/app';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from 'firebase/firestore';
// import LoginScreen from './screens/Login';
import SignUpScreen from './Screens/Signup';
import { View } from 'react-native-web';
import { initializeApp } from 'firebase/app';
import { LoginScreen } from './Screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './Screens/Home';
// import HomeScreen from './screens/Home';
// import AddContactScreen from './screens/AddContact';
// import EditContactScreen from './screens/EditContact';
// import ContactDetailsScreen from './screens/ContactDetailsScreen';
// import FavoritesScreen from './screens/Favorites'; // Import FavoritesScreen




const Stack = createStackNavigator();
const App = () => {
  
  

  return (
      <SafeAreaProvider>
        <NavigationContainer>

        
        <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>

      

      

  );
};

export default App;
