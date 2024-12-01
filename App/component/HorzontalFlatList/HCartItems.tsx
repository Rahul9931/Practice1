import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

interface HCartItemsProps {
  data: { imageUrl: string; text: string }[]; // Define the type for data
}

const HCartItems: React.FC<HCartItemsProps> = ({ data }) => {
  // Separate function to render each item's UI
  const renderItem = ({ item }: { item: { imageUrl: string; text: string } }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.icon} />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem} // Pass the render function here
    />
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center', // Center image and text vertically
    marginHorizontal: 10,
    marginTop:10
  },
  icon: {
    width: 40,
    height: 40, // Adjust size of the image
    marginBottom: 5, // Add space between image and text
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center', // Center the text
  },
});

export default HCartItems;
