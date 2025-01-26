import React from 'react';
import { Provider } from 'react-redux';
import store from './src/pagination/redux/store';
import PaginatedList from './src/pagination/PaginatedList';
import { StyleSheet, View } from 'react-native';
import CustomIcon from './src/components/ReusableIcon/CustomIcon';

const App = () => {
  // List of icon configurations
  const iconList = [
    { type: 'MaterialCommunityIcons', name: 'home', size: 32, color: 'blue' },
    { type: 'MaterialIcons', name: 'search', size: 32, color: 'green' },
    { type: 'AntDesign', name: 'heart', size: 32, color: 'red' },
    { type: 'Entypo', name: 'camera', size: 32, color: 'purple' },
  ];

  return (
    <View style={styles.container}>
      {iconList.map((icon, index) => (
        <CustomIcon
          key={index} // Use index as the key (ensure unique list items for best practices)
          type={icon.type}
          name={icon.name}
          size={icon.size}
          color={icon.color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Arrange icons in a row
    flexWrap: 'wrap', // Wrap to the next line if needed
  },
});

export default App;
