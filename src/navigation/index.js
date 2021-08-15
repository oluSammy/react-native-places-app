import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import PlacesScreen from "../screens/PlacesScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";


const Stack = createNativeStackNavigator();
const isAndroid = Platform.OS === "android";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: isAndroid ? Colors.primary : "#FFFFFF",
          },
          headerTintColor: isAndroid ? "#FFFFFF" : Colors.primary,
        }}
      >
        <Stack.Screen name="All Places" component={PlacesScreen} />
        <Stack.Screen name="Add Place" component={NewPlaceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
