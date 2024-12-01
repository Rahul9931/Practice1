import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';

const SimpleTextItems = ({ data, onItemPress }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  // Render a single currency item
  const _renderItem = ({ item }) => {
    const isSelected = item === selectedCurrency;
    return (
      <Pressable
        onPress={() => {
          setSelectedCurrency(item);
          onItemPress(item); // Notify parent component
        }}
      >
        <View style={styles.itemContainer}>
          <Text
            style={[
              styles.text,
              isSelected && { ...styles.boldText, fontSize: 16 }, // Increase font size for selected item
            ]}
          >
            {item}
          </Text>
          <View style={styles.line} />
        </View>
      </Pressable>
    );
  };

  // Render the list of items
  const renderList = () => (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={_renderItem}
    />
  );

  return <View>{renderList()}</View>;
};

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
  },
  text: {
    fontSize: 12,
    color: 'black',
    marginStart: 20,
  },
  boldText: {
    fontWeight: '700',
  },
  line: {
    height: 1,
    backgroundColor: '#d3d3d3',
    marginTop: 10,
  },
});

export default SimpleTextItems;
