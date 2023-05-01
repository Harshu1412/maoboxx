
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import Buttons from './components/Buttons';
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import DropDown from 'react-native-paper-dropdown';
import { TextInput, DefaultTheme, Provider,Surface,  DarkTheme,ThemeProvider } from "react-native-paper";
import Titlebar from './components/TitleBar';
import { FontAwesome5 } from '@expo/vector-icons'; 

const MyText=({navigation} ) =>{
  const [nightMode, setNightmode] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [list,setList]=useState(false)
 
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [colors, setColors] = useState('');

  const dropDownTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#0C8A7B",
      accent: "#0C8A7B",
    },
    roundness: 10,
    fonts: {
      regular: {
        fontFamily: "Roboto",
        fontWeight: "normal",
      },
    },
    animation: {
      scale: 1.0,
    },
  };
  
  const colorList = [
    {
      label: 'Clothes',
      value: 'Clothes',

    },
    {
      label: 'Food Item',
      value: 'Food Item',
    
    },
    {
      label: 'Electronics',
      value: 'Electronics',
    },
    {
      label: 'Medicines',
      value: 'Medicines',
    },
    {
      label: 'Documents',
      value: 'Documents',
    },
  ];

  return (
    <Provider theme={nightMode ? DarkTheme : DefaultTheme}>
      <ThemeProvider theme={nightMode ? DarkTheme : DefaultTheme}>
        
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
          
          <View
      style={{
        height: 52,
        marginTop: 10,
        backgroundColor: "white",
        borderRadius: 8,
        width: "100%",
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
        <Text style={{ fontSize: 18, fontWeight: 500 }}>Task</Text>
      </View>
      
   
    </View>
      <View >
        <TextInput
          label="Pickup from"
          mode="outlined"
          // width={285}
          onFocus={() => navigation.navigate("Autocomplete")}
          // onBlur={handleBlur}
          
          right={
            <TextInput.Icon
              icon={() =><EvilIcons name="location" size={24} color="black" />}
            />
          }
          theme={{
            ...DefaultTheme,
            roundness: 10,
            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            width:"100%",
            backgroundColor: "white",
            height: 50,
            // borderColor: isFocused ? "#0C8A7B" : "#808080",

            color: "black",
          }}
        />
      </View>

      <View style={{ marginTop: 15 }}>
        <TextInput
          label="Deliver to"
          mode="outlined"
          width={285}
          // onFocus={handleFocus1}
          // onBlur={handleBlur1}
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
            // borderColor: isFocused ? "#0C8A7B" : "#808080",

            color: "black",
          }}
        />
      </View>
           
        <View style={{marginTop:15}} >

        <DropDown
  label={'Add Task Details'}
  theme={dropDownTheme}
  mode={'outlined'}
  visible={showMultiSelectDropDown}
  showDropDown={() => setShowMultiSelectDropDown(true)}
  onDismiss={() => setShowMultiSelectDropDown(false)}
  value={colors}
  setValue={setColors}
  list={colorList}
  multiSelect

/>
            </View>



             <View style={{ marginTop: 15 }}>
        <TextInput
          label="Instructions"
          mode="outlined"
          width={340}
          // onFocus={handleFocus}
          // onBlur={handleBlur}
          multiline={true}
          theme={{
            ...DefaultTheme,
            roundness: 10,

            colors: { primary: "#0C8A7B", background: "black" },
          }}
          style={{
            height: 150,
            backgroundColor: "white",
            // borderColor: isFocused ? "#0C8A7B" : "#808080",
            color: "black",
          }}
        />
      </View>
      <View style={{ marginTop: 180,alignSelf:"center" }}>
        <Buttons Name={"Submit"} press={"OrderDetails"} />
      </View>
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "white"
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
marginHorizontal:"5%"
   
   
  },
});

export default MyText;


  {/* <CheckBox
                  style={{
                    position: "absolute",
                    right: 20,
                  }}
                  
                  value={checkedItems.includes(item.name)}
                  onValueChange={(isChecked) => {
                    if (isChecked) {
                      setCheckedItems([...checkedItems, item.name]);
                    } else {
                      setCheckedItems(
                        checkedItems.filter((name) => name !== item.name)
                      );
                    }
                  }}
                /> */}
