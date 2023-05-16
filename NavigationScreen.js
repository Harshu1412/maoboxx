import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskScreen from "./screens/TaskScreen";
import MapBoxScreen from "./screens/MapBoxScreen";
import Map from "./screens/Map";
import AutoComplete from "./screens/AutoComplete";

import OrderDetails from "./screens/OrderDetails";
import ItemSelectionPage from "./screens/PayTo";
import TaskScreen1 from "./screens/taskScreen1";
import MapboxPlacesInput from "./mapbox";
import { Custombox } from "./screens/custombox";

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pay"
          component={ItemSelectionPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapBoxScreen"
          component={MapBoxScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Autocomplete"
          component={AutoComplete}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Custombox"
          component={Custombox}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
