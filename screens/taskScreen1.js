import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Titlebar from "../components/TitleBar";
import { TextInput, DefaultTheme } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CustomCheckbox from "../components/checkbox";

const TaskScreen1 = ({navigation}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [pickUp, setPickUp] = useState("");
  const [deliverTo, setDeliverTo] = useState("");
  const [instruction, setInstruction] = useState("");
  const [pickUpError, setPickupError] = useState(false);
  const [deliverError, setDeliverError] = useState(false)
  const [addTaskError, setAddTaskError] = useState(false)
  const [instructionError, setInstructionError] = useState(false);

  const colorList = [
    { id: 1, name: "Food", uri: require("../assets/food.png") },
    { id: 2, name: "Medicines", uri: require("../assets/medicines.png") },
    { id: 3, name: "Clothes", uri: require("../assets/clothes.png") },
    { id: 4, name: "Documents or Books",uri: require("../assets/documents.png"),},
    { id: 5, name: "Electronics", uri: require("../assets/Electronics.png") },
    { id: 6, name: "Items for Repair", uri: require("../assets/Repair.png") },
    {id: 7,name: "Business Deliceries",uri: require("../assets/Business.png"),},
    { id: 8, name: "Others", uri: require("../assets/others.png") },
  ];

  const handleFocus = () => {
    setIsFocused(true);
    navigation.navigate("Autocomplete")
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocus1 = () => {
    setIsFocused(true);
    Keyboard.dismiss();
  };

  const handleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = () => {
    if(pickUp.length === 0 ) {
      setPickupError(true)
    }
    if(deliverTo.length === 0){
      setDeliverError(true)
    }
    if(checkedItems.length ===0){
      setAddTaskError(true)
    }
    if(instruction.length === 0){
      setInstructionError(true) 
    }

    if(pickUp.length !== 0  )
    {
      setPickupError(false)
      
    }
    if(deliverTo.length !==0){
      setDeliverError(false);
    }
    if(checkedItems.length !==0){
      setAddTaskError(false)
    }
    if(instruction.length !== 0){
      setInstructionError(false) 
    }
    if(pickUp.length !== 0 && deliverTo.length !==0 && checkedItems.length !==0 && instruction.length !== 0 ){
      navigation.navigate("OrderDetails")
    }
     }

  return (
      <View style={styles.mainView}>
        
  {/* titlebar view */}
        <View style={{ width: "90%" }}>
          <Titlebar title={"Task"} />
        </View>

        {/* pickup view */}
        <View style={styles.textinputsView}>
          <TextInput
            label="Pickup from"
            mode="outlined"
            width={285}
            value={pickUp}
            onChangeText={(text)=>setPickUp(text)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            right={
              <TextInput.Icon
                icon={() => (
                  <EvilIcons name="location" size={24} color="black" onPress={()=>navigation.navigate("MapBoxScreen")}/>
                )}
              />
            }
            theme={{
              ...DefaultTheme,
              roundness: 10,
              colors: { primary: "#0C8A7B", background: "black" },
            }}
            style={{
              backgroundColor: "white",
              borderColor: isFocused ? "#0C8A7B" : "#808080",
              color: "black",
            }}
          />
        </View>

        { pickUpError ? (<Text style={{color: "red", alignSelf: "flex-start", marginLeft: 25}}>Select pickup loacation</Text> ): null}
        {/*deliver to view */}
        <View style={styles.textinputsView}>
          <TextInput
            label="Deliver to"
            mode="outlined"
            value={deliverTo}
            onChangeText={(text)=>setDeliverTo(text)}
            // onFocus={handleFocus}
            // onBlur={handleBlur}
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
              backgroundColor: "white",
              borderColor: isFocused ? "#0C8A7B" : "#808080",
              color: "black",
            }}
          />
        </View>
        
        { deliverError ? (<Text style={{color: "red", alignSelf: "flex-start", marginLeft: 25}}>Select delivery loacation</Text> ): null}


        {/* add task details  start */}
        <View style={styles.textinputsView}>
          <TextInput
            // editable={false}
            label="Add task details"
            mode="outlined"
            onPress={()=>Keyboard.dismiss()}
            onFocus={handleFocus1}
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
              backgroundColor: "white",
              borderColor: isFocused ? "#0C8A7B" : "#808080",
              color: "black",
            }}
          />
        </View>

        { addTaskError &&  !modalVisible ? (<Text style={{color: "red", alignSelf: "flex-start", marginLeft: 25}}>please select item</Text> ): null}

{/* modal view start */}
        {modalVisible && (
          <View
            style={styles.modalViewhere}
          >
            <FlatList
              data={colorList}
              keyExtractor={(item) => item.name.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    marginBottom: 12,
                    marginTop: 3,
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
        {/* instruction view */}
        {!modalVisible && (
          <View style={{marginTop: "4%",
          width: "90%"}}>
            <TextInput
              label="Instructions"
              mode="outlined"
              value={instruction}
              onChangeText={(text) => setInstruction(text)}
              // onFocus={handleFocus}
              // onBlur={handleBlur}
              multiline={true}
              theme={{
                ...DefaultTheme,
                roundness: 10,
                colors: { primary: "#0C8A7B", background: "black" },
              }}
              style={{
                textAlignVertical: "center",
                height: 150,
                backgroundColor: "white",
                borderColor: isFocused ? "#0C8A7B" : "#808080",
                color: "black",
              }}
            />
          </View>
        )}
                
      { instructionError ? (<Text style={{color: "red", alignSelf: "flex-start", marginLeft: 25}}>Please write something</Text> ): null}

        {/* buttonview */}
        <View style={styles.buttonView }>
        
      <TouchableOpacity style={{width:"100%",height:49 , backgroundColor:"black",borderRadius:10, justifyContent:"center",alignItems:"center"}} onPress={() => handleSubmit()}>
         <Text style={{color:"white"}}>Submit</Text>
      </TouchableOpacity>
      </View>
    
      
      </View>
  );
};

export default TaskScreen1;

const styles = StyleSheet.create({
  mainView: {
     backgroundColor:"white", 
     alignItems: "center", 
     flex: 1 
    },
  textinputsView: {
    marginTop: "4%",
    width: "90%",
  },
  modalViewhere:
  {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 8,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
 buttonView:
 {
  flex:1,
  width:"90%" ,
  position:"absolute",
  bottom:10,
  marginTop:"9%"
}
});
