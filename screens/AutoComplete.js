import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Mapbox from "@rnmapbox/maps";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import TaskScreen from "./TaskScreen";
import { Ionicons } from "@expo/vector-icons";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { db } from "../firebase";

export default function AutoComplete({ navigation }) {
  
  const [origin, setOrigin] = useState("");
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      </TouchableOpacity>
      <View style={{ marginLeft: 10 }}>
        <MapboxPlacesAutocomplete
          id="maps"
          placeholder="Origin"
          value={origin}
          accessToken={
            "pk.eyJ1IjoiaGFyc2h1MTQxMiIsImEiOiJjbGdtMWN1MHMwMWMxM3FwcGZ3a3p2ajliIn0.sAqxecqbNtP8fVkl_9m9xQ"
          }
          onPlaceSelect={(data) => {
            setOrigin(data.place_name);
            console.log(data.place_name);
            const dfs = collection(
              db,
              "originss",
              "i1PWvfV6SNq9JSb5kgEd",
              "location"
            );
            console.log("--------------------",dfs);
            const date = new Date();
            console.log(date)
            addDoc(
              collection(db, "originss", "i1PWvfV6SNq9JSb5kgEd", "location"),
              {
                origin: data.place_name,
                createdAt:date
              }
            );
          }}
          onClearInput={({ id }) => {
            id === "origin" && setOrigin(null);
          }}
          countryId="IN"
          containerStyle={{
            marginTop: 8,
            width: 300,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
