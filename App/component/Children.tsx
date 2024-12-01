import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';

interface ChildrenProps {
  data: { imageUrl: string; text: string }[]; // Define the type for data
}

const Children: React.FC<ChildrenProps> = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.imageUrl }} style={styles.icon} />
          {/* Wrap the item.text in a Text component */}
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  itemText: {
    fontSize: 14,
  },
});

export default Children;
