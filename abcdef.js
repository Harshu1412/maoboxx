// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';
// import { SearchBar } from 'react-native-elements';

// MapboxGL.setAccessToken('<YOUR_MAPBOX_ACCESS_TOKEN>');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [cent
// erCoordinate, setCenterCoordinate] = useState(null);
//   const [annotations, setAnnotations] = useState([]);

//   const handleSearch = () => {
//     fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=${MapboxGL.getAccessToken()}`)
//       .then(response => response.json())
//       .then(json => {
//         const features = json.features;
//         if (features && features.length > 0) {
//           const center = features[0].center;
//           setCenterCoordinate(center);
//           setAnnotations(features.map(f => ({
//             id: f.id,
//             title: f.text,
//             subtitle: f.properties.address,
//             coordinate: f.center,
//           })));
//         } else {
//           setCenterCoordinate(null);
//           setAnnotations([]);
//         }
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <SearchBar
//         placeholder="Search for a place"
//         onChangeText={setSearchQuery}
//         onSubmitEditing={handleSearch}
//         value={searchQuery}
//       />
//       <MapboxGL.MapView
//         style={{ flex: 1 }}
//         zoomLevel={10}
//         centerCoordinate={centerCoordinate}
//       >
//         {annotations.map(a => (
//           <MapboxGL.PointAnnotation
//             key={a.id}
//             id={a.id}
//             coordinate={a.coordinate}
//           >
//             <MapboxGL.Callout title={a.title} subtitle={a.subtitle} />
//           </MapboxGL.PointAnnotation>
//         ))}
//       </MapboxGL.MapView>
//     </View>
//   );
// };

// export default App;
