import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface HCartItemsProps {
  data: { imageUrl: string; text: string }[]; // Define the type for data
}

const VerticaleItems: React.FC<HCartItemsProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Function to handle item press
  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

  // Separate function to render each item's UI
  const renderItem = ({ item, index }: { item: { imageUrl: string; text: string }; index: number }) => {
    const isSelected = selectedIndex === index;

    return (
      <TouchableOpacity onPress={() => handlePress(index)} style={[styles.item, isSelected && styles.selectedItem]}>
        <Image source={{ uri: item.imageUrl }} style={styles.icon} />
        <Text style={styles.itemText}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem} // Pass the render function here
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
  },
  selectedItem: {
    backgroundColor: 'white',
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 30,
  },
  itemText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black'
  },
});

export default VerticaleItems;
