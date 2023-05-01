import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Titlebar from "../components/TitleBar";
import { TextInput, DefaultTheme } from "react-native-paper";
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import Buttons from "../components/Buttons";

const OrderDetails = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const MapImage=require('../assets/MapImage.png')

  return (
    <View style={{ backgroundColor: "white", alignItems: "center", flex: 1 }}>
      <Titlebar title={"Order Details"} />
      <View>
        <TextInput
          label="Pickup from"
          mode="outlined"
          width={285}
          onFocus={handleFocus}
          onBlur={handleBlur}
          right={<TextInput.Icon icon={()=><EvilIcons name="location" size={24} color="black" />}/>}
          theme={{
            ...DefaultTheme,
            roundness: 10,
            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            height:45,
            backgroundColor: "white",
            borderColor: isFocused ? "#0C8A7B" : "#808080",
            color: "black",
          }}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <TextInput
          label="Deliver to"
          mode="outlined"
          width={285}
          onFocus={handleFocus}
          onBlur={handleBlur}
          right={<TextInput.Icon icon={()=><Entypo name="location-pin" size={24} color="orange" />}/>}
          theme={{
            ...DefaultTheme,
            roundness: 10,
            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            height: 45,
            backgroundColor: "white",
            borderColor: isFocused ? "#0C8A7B" : "#808080",
            color: "black",
          }}
        />
      </View>
      <View
        style={{
          height: 45,
          marginTop: 15,
          backgroundColor: "white",
          borderRadius: 8,
          width: 340,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        }}
      >
        <Text style={{ marginLeft: 20,fontWeight:"400",fontSize:14 }}>Item Type:-</Text>
      </View>
      <View
        style={{
          width: 340,
          height: 125,
          borderWidth: 1,
          marginTop: 15,
          borderRadius: 8,
          borderColor: "#D8D6D4",
        }}
      >
        <View style={{ marginTop: 13, marginLeft: 16 }}>
          <Text style={{fontWeight:"500",fontSize:14}}>Billing Details</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: 140,
              marginLeft: 16,
              marginTop: 10,
              borderStyle: "dotted",
              borderColor: "#B4B4B4",
            }}
          >
            <Text style={{ marginLeft: 3, color: "#0AB7EE",fontWeight:"500",fontSize:12 }}>
              Delievery fee for 20km
            </Text>
          </View>
          <View style={{ marginTop: 16, position: "absolute", right: 25 }}>
            <Text style={{fontWeight:"600",fontSize:14}}>$20</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginTop: 16,
            marginLeft: 16,
            marginRight: 16,
            borderColor: "#B4B4B4",
          }}
        ></View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginLeft: 16, marginTop: 14 }}>
            <Text style={{fontWeight:"600",fontSize:14}}>To Pay</Text>
          </View>
          <View style={{ marginTop: 14, position: "absolute", right: 25 }}>
            <Text  style={{fontWeight:"600",fontSize:14}}>$20</Text>
          </View>
        </View>
      </View>
      <View  style={{marginTop:14}}>
        <Image style={{width:340,height:110, borderRadius: 15}} source={MapImage}/>
      </View>
      <View
        style={{
          height: 100,
          marginTop: 15,
          backgroundColor: "white",
          borderRadius: 8,
          width: 340,
       
          alignSelf: "center",

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        }}
      >
        <View style={{marginTop:13,marginLeft:15}}>
        <Text style={{fontSize:14,fontWeight:500}}>Instruction</Text>
        </View>
        <View style={{marginTop:5,marginLeft:15}} >
        <Text style={{fontSize:12,fontWeight:400}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</Text>
        </View>
     
      </View>
      <View style={{position:"absolute",bottom:20}}>
      <Buttons Name={"Payment"} />
      </View>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({});
