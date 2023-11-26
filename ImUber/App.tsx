/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ItemList from './ItemList';
import DriverList from './screens/DriverList';
import Main from './screens/Main';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import ConfirmRide from './screens/ConfirmRide.js';
import Rating from './screens/Rating.js';
import PessengerTrackRide from './screens/PessengerTrackRide.js';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DriverList" component={DriverList} />
        <Stack.Screen name="ConfirmRide" component={ConfirmRide} />
        <Stack.Screen name="PessengerTrackRide" component={PessengerTrackRide} />
        <Stack.Screen name="Rating" component={Rating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
