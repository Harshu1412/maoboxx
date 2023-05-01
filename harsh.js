import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, IconButton, Menu, Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleCheckboxSelect = (item) => {
    const index = selectedItems.indexOf(item);
    if (index === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((_, i) => i !== index));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Outlined text input"
        value={text}
        onChangeText={(value) => setText(value)}
        mode="outlined"
        right={
          <IconButton
            icon="menu"
            onPress={openMenu}
          />
        }
        onFocus={openMenu}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="menu"
            onPress={openMenu}
          />
        }
      >
        <Menu.Item title="Option 1" onPress={() => handleCheckboxSelect('Option 1')} />
        <Menu.Item title="Option 2" onPress={() => handleCheckboxSelect('Option 2')} />
        <Menu.Item title="Option 3" onPress={() => handleCheckboxSelect('Option 3')} />
      </Menu>
      <View style={styles.selectedItemsContainer}>
        {selectedItems.map((item) => (
          <Checkbox.Item
            key={item}
            label={item}
            status="checked"
            onPress={() => handleCheckboxSelect(item)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  selectedItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
});

export default MyComponent;
