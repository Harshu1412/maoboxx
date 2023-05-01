// import React, { useState } from 'react';
// import { View, Text, Image} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const MyDropdown = () => {
//   const [selectedValue, setSelectedValue] = useState('apple');
  
//   return (
//     <View>
//       <Picker
//         selectedValue={selectedValue}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//         <Picker.Item label="Apple" value="apple" />
//         <Picker.Item label="Banana" value="banana" />
//         <Picker.Item label="Orange" value="orange" />
//       </Picker>

//       {selectedValue === 'apple' && <Image source={require('./assets/MapImage.png')} />}
//       {selectedValue === 'banana' && <Image source={require('./assets/MapImage.png')} />}
//       {selectedValue === 'orange' && <Image source={require('./assets/MapImage.png')} />}
//     </View>
//   );
// };

// export default MyDropdown;
