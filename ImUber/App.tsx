/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ItemList from './ItemList';
import DriverList from './screens/DriverList';
import Main from './screens/Main';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< Updated upstream
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DriverList" component={DriverList} />
=======
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="DriverList" component={DriverList} />
        <Stack.Screen name="ConfirmRide" component={ConfirmRide} /> */}
        <Stack.Screen
          name="PessengerTrackRide"
          component={PessengerTrackRide}
        />
        <Stack.Screen name="Rating" component={Rating} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
