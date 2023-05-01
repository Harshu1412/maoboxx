import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Mapbox from "@rnmapbox/maps";
import NavigationScreen from "./NavigationScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


Mapbox.setAccessToken(
  "pk.eyJ1IjoiaGFyc2h1MTQxMiIsImEiOiJjbGdtMWN1MHMwMWMxM3FwcGZ3a3p2ajliIn0.sAqxecqbNtP8fVkl_9m9xQ"
);

const Stack = createNativeStackNavigator();

export default function App() {
  

  
  return (
    <NavigationScreen/>)
}

const styles = StyleSheet.create({
});
