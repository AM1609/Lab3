// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
// import SignUpScreen from './Screens/Signup';
// import { LoginScreen } from './Screens/Login';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import HomeScreen from './Screens/Home';
// import ForgotPasswordScreen from './Screens/ForgotPassword';
// import Home from './Screens/Home';
// import BookDetail from './Screens/BookDetail';


// const Stack = createStackNavigator();
// const App = () => {
  
  

//   return (
//       <SafeAreaProvider>
//         <NavigationContainer>

        
//         <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="BookDetail" component={BookDetail} />

//         </Stack.Navigator>
//         </NavigationContainer>
//       </SafeAreaProvider>

      

      

//   );
// };

// export default App;
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;