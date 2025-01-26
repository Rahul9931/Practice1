import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface Props {
  data: Character[];
  isLoading: boolean;
  loadMoreData: () => void;
}

const CharacterList: React.FC<Props> = ({ data, isLoading, loadMoreData }) => {
  const renderCharacterCard = ({ item }: { item: Character }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text>Status: {item.status}</Text>
        <Text>Species: {item.species}</Text>
        <Text>Gender: {item.gender}</Text>
      </View>
    </View>
  );

  const renderFooter = () => {
    if (!isLoading) return null;
    return <ActivityIndicator style={{ marginVertical: 16 }} size="large" />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderCharacterCard}
      keyExtractor={(item) => item.id.toString()}
      onEndReached={loadMoreData} // Trigger load more when end is reached
      onEndReachedThreshold={0.5} // Trigger at 50% to the bottom
      ListFooterComponent={renderFooter} // Loader while fetching
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default CharacterList;
