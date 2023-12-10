import { TouchableOpacity, Image, Text, View } from "react-native";

import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { navData } from "../components/NavOptions";

import { useNavigation } from "@react-navigation/native";
import { HomeScreenProp } from "../components/NavOptions";
import tailwind from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const EatsScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tailwind`bg-gray-50 absolute top-8 left-4 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View>
        <Image
          source={{ uri: navData[1].image }}
          style={{ width: 120, height: 120, resizeMode: "contain" }}
        />
      </View>
      <Text style={{ marginTop: 24, fontSize: 16 }}>
        Not yet implemented...
      </Text>
    </SafeAreaView>
  );
};

export default EatsScreen;
