import React from "react";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";


const MapboxPlacesInput = () => {
  return (
    <MapboxPlacesAutocomplete
      id="IN"
      placeholder="Origin"
      accessToken={"pk.eyJ1IjoiaGFyc2h1MTQxMiIsImEiOiJjbGdtMWN1MHMwMWMxM3FwcGZ3a3p2ajliIn0.sAqxecqbNtP8fVkl_9m9xQ"} // MAPBOX_PUBLIC_TOKEN is stored in .env root project folder
      onPlaceSelect={(data) => {
        dispatch(setOrigin(data));
        dispatch(setDestination(null));
      }}
      onClearInput={({ id }) => {
        id === "india" && dispatch(setOrigin(null));
      }}
      countryId="IN"
      containerStyle={{
        marginBottom: 12,
      }}
    />
  );
};

export default MapboxPlacesInput;








