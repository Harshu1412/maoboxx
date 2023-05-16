import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Buttons = (props) => {
    const navigation = useNavigation()
  return (
  <View>
    <View >
      <TouchableOpacity style={{width:"100%",height:49 , backgroundColor:"black",borderRadius:10, justifyContent:"center",alignItems:"center"}} onPress={()=>navigation.navigate(props.press)}>
         <Text style={{color:"white"}}>{props.Name}</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({})