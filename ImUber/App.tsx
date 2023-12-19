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
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import ConfirmRide from './screens/ConfirmRide.js';
import ConfirmRoute from './screens/ConfirmRoute.js';
import Rating from './screens/Rating.js';
import PessengerTrackRide from './screens/PessengerTrackRide.js';
import DriverTrackRide from './screens/DriverTrackRide.js';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const httpLink = createHttpLink({
  uri: 'https://your-graphql-endpoint',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem('jwtToken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="DriverList" component={DriverList} />
          <Stack.Screen name="ConfirmRide" component={ConfirmRide} />
          <Stack.Screen
            name="PessengerTrackRide"
            component={PessengerTrackRide}
          />
          <Stack.Screen name="Rating" component={Rating} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
