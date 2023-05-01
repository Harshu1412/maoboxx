import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";


const Titlebar = (props) => {
  return (
    <View
      style={{
        height: 52,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 8,
        width: "92%",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <TouchableOpacity style={{ position: "absolute", left: 20 }}>
        <MaterialIcons name="arrow-back-ios" size={24} color="grey" />
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 18, fontWeight: 500 }}>{props.title}</Text>
      </View>
      
   
    </View>
  );
};

export default Titlebar;

const styles = StyleSheet.create({});
