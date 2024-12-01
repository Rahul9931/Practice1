import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons from react-native-vector-icons
import styles from './styles';
const ContactUsItems = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.line} />
          <Icon name={item.icon} size={24} color="#FF69B4" style={styles.icon} />
          <Text style={styles.text}>{item.label}</Text>
        </View>
      )}
    />
  );
};



export default ContactUsItems;
