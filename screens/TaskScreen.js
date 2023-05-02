import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,Keyboard
} from "react-native";
import React, { useState } from "react";
import { TextInput, DefaultTheme } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Titlebar from "../components/TitleBar";
import Buttons from "../components/Buttons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import CustomCheckbox from "../components/checkbox";

const TaskScreen = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const colorList = [
    { id: 1, name: "Food", uri: require("../assets/food.png") },
    { id: 2, name: "Medicines", uri: require("../assets/medicines.png") },
    { id: 3, name: "Clothes", uri: require("../assets/clothes.png") },
    {
      id: 4,
      name: "Documents or Books",
      uri: require("../assets/documents.png"),
    },
    { id: 5, name: "Electronics", uri: require("../assets/Electronics.png") },
    { id: 6, name: "Items for Repair", uri: require("../assets/Repair.png") },
    {
      id: 7,
      name: "Business Deliceries",
      uri: require("../assets/Business.png"),
    },
    { id: 8, name: "Others", uri: require("../assets/others.png") },
  ];

  const handleFocus = () => {
    setIsFocused(true);
    
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocus1 = () => {
    setIsFocused(true);
    // navigation.navigate("Map");
  };
  const handleBlur1 = () => {
    setIsFocused(false);
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
    
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Titlebar title={"Task"} />
      <View style={{ width:"92%"}}>
        <TextInput
          label="Pickup from"
          mode="outlined"
          width={285}
          // onFocus={() => navigation.navigate("Autocomplete")}
          onBlur={handleBlur}
          right={
            <TextInput.Icon
              icon={() => <EvilIcons name="location" size={24} color="black" />}
            />
          }
          theme={{
            ...DefaultTheme,
            roundness: 10,
            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            backgroundColor: "white",
            height: 50,
            borderColor: isFocused ? "#0C8A7B" : "#808080",
            color: "black",
          }}
        />
      </View>
      <View style={{ marginTop: 15,width:"92%" }}>
        <TextInput
          label="Deliver to"
          mode="outlined"
          onFocus={handleFocus1}
          onBlur={handleBlur1}
          right={
            <TextInput.Icon
              icon={() => (
                <Entypo name="location-pin" size={24} color="orange" />
              )}
            />
          }
          theme={{
            ...DefaultTheme,
            roundness: 10,
            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            height: 50,
            backgroundColor: "white",
            borderColor: isFocused ? "#0C8A7B" : "#808080",

            color: "black",
          }}
        />
      </View>
      
      <View style={{ marginTop: 15,width:"92%" }}>
      <ScrollView > 
        <TextInput
          // editable={false}
          onPress={Keyboard.dismiss} 
          label="Add task details"
          mode="outlined"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={checkedItems.join(", ")}
          right={
            <TextInput.Icon
              icon={() =>
                !modalVisible ? (
                  <AntDesign name="down" size={24} color="black" />
                ) : (
                  <AntDesign name="up" size={24} color="black" />
                )
              }
              onPress={handleModal}
            />
          }
          theme={{
            ...DefaultTheme,
            roundness: 10,
            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            height: 50,
            backgroundColor: "white",
            borderColor: isFocused ? "#0C8A7B" : "#808080",
            color: "black",
          }}
        />
    
    </ScrollView>

      </View>
      
      {modalVisible && (
        <View
          style={{
            width: "92%",
            position: "absolute",
            top: 290,
            backgroundColor: "white",
            borderRadius: 8,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            marginBottom: 30,
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
           <FlatList
            data={colorList}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  marginBottom: 15,
                  marginLeft: 8,
                }}
              >
                <Image
                  style={{ width: 25, height: 25, marginRight: 10 }}
                  source={item.uri}
                />
                <Text style={{}}>{item.name}</Text>
                <CustomCheckbox
                  item={item}
                  isChecked={checkedItems.includes(item.name)}
                  onToggle={(item) => {
                    if (checkedItems.includes(item.name)) {
                      setCheckedItems(
                        checkedItems.filter((name) => name !== item.name)
                      );
                    } else {
                      setCheckedItems([...checkedItems, item.name]);
                    }
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      {!modalVisible && (
        <View style={{ position: "absolute", top: 287, marginTop: 15,width:"92%" }}>
          <TextInput
            label="Instructions"
            mode="outlined"         
            onFocus={handleFocus}
            onBlur={handleBlur}
            multiline={true}

            theme={{
              ...DefaultTheme,
              roundness: 10,

              colors: { primary: "#0C8A7B", background: "black" },
            }}
            style={{
              // add padding from top
              textAlignVertical: 'center',
              height: 150,
              backgroundColor: "white",
              borderColor: isFocused ? "#0C8A7B" : "#808080",
              color: "black",
            }}
          />
        </View>
      )}
      <View style={{ marginTop: 380, bottom: 10 }}>
        <Buttons Name={"Submit"} press={"OrderDetails"} />
      </View>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  containerStyle: {},
  safeContainerStyle: {},
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: "white",
    borderColor: "orange",
  },
});
