import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import Constants from 'expo-constants';
export const Custombox = () => {
//   return (
//     <View style={{  }}>
//      <TextInput placeholder="dhfsfashg"/>

//      <View style={{ justifyContent: "center", margin: 10 }}>
//         <View
//           style={{ borderWidth: 1, borderColor: "lightgreen", padding: 20 }}
//         ></View>
//       </View>


//       <View
//         style={{
//           backgroundColor: "white",
//           width: 25,
//           alignItems: "center",
//           borderRadius: 5,
//           margin: 55,
//           marginLeft: 30,
//           position: "absolute",
//         }}
//       >
//         <Text>hio</Text>
//       </View>
      
//     </View>
//   );
const [distanceFromStatusBar, setDistanceFromStatusBar] = useState(0);

const handleLayout = event => {
    const { y } = event.nativeEvent.layout;
    setDistanceFromStatusBar(
      Platform.OS === 'android'
        ? y - Constants.statusBarHeight
        : y
    );
  };

  useEffect(() => {
    setDistanceFromStatusBar(
      Platform.OS === 'android'
        ? Constants.statusBarHeight
        : 0
    );
  }, []);
  return (
    <View onLayout={handleLayout}style={{marginTop:100}}>
     
      <View style={{ justifyContent: "center",  }}>
        <View style={{ borderWidth: 1, borderColor: "lightgreen", padding: 10 }}>
    <Text>hi hello</Text>
         </View>
      </View>
      {console.log(distanceFromStatusBar)}
      <StatusBar translucent />
    </View>
  );
};
