import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Mapbox from "@rnmapbox/maps";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import { Entypo } from "@expo/vector-icons";


Mapbox.setAccessToken(
    "pk.eyJ1IjoiaGFyc2h1MTQxMiIsImEiOiJjbGdtMWN1MHMwMWMxM3FwcGZ3a3p2ajliIn0.sAqxecqbNtP8fVkl_9m9xQ"
  );


const MapBoxScreen = () => {
    const [showMap, setShowMap] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(false);
    const [userLocation, setUserLocation] = useState(null);
    const [zoomin, setZoomin] = useState(false);
    const [selectedCoordinates, setSelectedCoordinates] = useState([]);
    const [address, setAddress] = useState();
    const [geoLocation, setGeoLocation] = useState(null);
    const [geozoom, setGeozoom] = useState(false);
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    const handleCurrent = () => {
        console.log(origin)
         setSelectedLocation(true);
         // setZoomin(true);
       };
       
     
       const handleUserLocationUpdate = (location) => {
         setUserLocation(location);
       };
       const handleMapPress = (event) => {
         const coordinates = event.geometry.coordinates.slice();
         setSelectedCoordinates(coordinates);
         console.log(selectedCoordinates);
       };
       const openLocation = () => {
         console.log("Harhuuuuu");
         setGeozoom(true);
         setShowMap(true);
       };

  return (
    <View style={styles.container}>
     
        {showMap && (
          <Mapbox.MapView style={styles.map} onPress={handleMapPress}>
            {zoomin && (
              <Mapbox.Camera
                zoomLevel={16}
                centerCoordinate={[
                  userLocation.coords.longitude,
                  userLocation.coords.latitude,
                ]}
              />
            )}
            {geozoom && (
              <Mapbox.Camera
                zoomLevel={16}
                centerCoordinate={[geoLocation[0], geoLocation[1]]}
              />
            )}

            {selectedLocation && (
              <Mapbox.UserLocation
                onUpdate={(location) => {
                  console.log(location);
                  handleUserLocationUpdate(location);
                  console.log(
                    location.coords.longitude,
                    location.coords.latitude
                  );
                }}
              />
            )}
            {selectedCoordinates.length > 0 && (
              <Mapbox.PointAnnotation
                id="selectedLocation"
                coordinate={selectedCoordinates}
              />
            )}
          </Mapbox.MapView>
        )}
        {showMap && (
          <View style={{ alignSelf: "center" }}>
            <TouchableOpacity
              onPress={handleCurrent}
              style={{
                width: 300,
                height: 40,
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontWeight: 500, fontSize: 18 }}>
                current location
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>setShowMap(false)}
              style={{
                width: 300,
                height: 40,
                backgroundColor: "blue",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white", fontWeight: 500, fontSize: 18 }}>
                remove current location
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {!showMap && (
          <View>
          <View
            style={{
              width: 343,
              height: 50,
              alignSelf: "center",
              justifyContent:"center",
              flexDirection: "row",
              borderWidth:1
            }}
          >
            <MapboxPlacesAutocomplete
              id="origin"
              placeholder="Origin"
              value={origin}
              accessToken={
                "pk.eyJ1IjoiaGFyc2h1MTQxMiIsImEiOiJjbGdtMWN1MHMwMWMxM3FwcGZ3a3p2ajliIn0.sAqxecqbNtP8fVkl_9m9xQ"  } 
              onPlaceSelect={(data) => {
                setOrigin(data.place_name)
                console.log(data.place_name);
                setGeoLocation(data.geometry.coordinates);
                setSelectedCoordinates(data.geometry.coordinates);
                setDestination(null);            }}
            
              onClearInput={({ id }) => {
                id === "origin" && setOrigin(null);       }}
              onFocus={() => geocode}
              countryId="IN"
              containerStyle={{
               
                marginTop:8,
                width: 300,
              }}
             
            />
            <TouchableOpacity
              style={{ justifyContent: "center"}}
              onPress={openLocation}
            >
              <Entypo name="location-pin" size={24} color="grey" />
            </TouchableOpacity>

           
          </View>
          </View>
        )}
      </View>
 
  );
}


  

export default MapBoxScreen

const styles = StyleSheet.create({
    page: {},
    container: {
      width: "100%",
      height: "97%",
    },
    map: {
      flex: 1,
    },
  
    closeText: {
      backgroundColor: "white",
      borderRadius: 5,
      padding: 5,
      margin: 10,
      alignSelf: "flex-end",
    },
  });
  