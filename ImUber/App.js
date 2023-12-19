// react native and vlors
import React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

// page navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ItemList from "./ItemList";
import DriverList from "./screens/DriverList";
import Main from "./screens/Main";
import Login from "./screens/Login.js";
import Register from "./screens/Register.js";
import ConfirmRide from "./screens/ConfirmRide.js";
import ConfirmRoute from "./screens/ConfirmRoute.js";
import Rating from "./screens/Rating.js";
import PessengerTrackRide from "./screens/PessengerTrackRide.js";
import OnCar from "./screens/OnCar.js";
import DriverTrackRide from "./screens/DriverTrackRide.js";

// apollo client
import { CustomApolloProvider, client } from "./apollo"; // Import Apollo setup

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <CustomApolloProvider client={client}>
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
          <Stack.Screen name="OnCar" component={OnCar} />
          <Stack.Screen name="Rating" component={Rating} />
          {/* <Stack.Screen name="ConfirmRoute" component={ConfirmRoute} />
          <Stack.Screen name="DriverTrackRide" component={DriverTrackRide} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </CustomApolloProvider>
  );
};

export default App;
