import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import CharacterList from './CharacterList';
import { setCharacters } from './redux/characterSlice';
import { selectCharacters, selectTotalPages } from './redux/characterSelector';

const PaginatedList: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters); // Get characters
  const totalPages = useSelector(selectTotalPages); // Get total pages

  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCharacters = async (currentPage: number) => {
    if (isLoading || (totalPages && currentPage > totalPages)) return;

    setIsLoading(true);

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const newCharacters = response.data.results;

      dispatch(
        setCharacters({
          characters: newCharacters,
          totalPages: response.data.info.pages,
        })
      );
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreData = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  return (
    <View style={styles.container}>
      <CharacterList
        data={characters}
        isLoading={isLoading}
        loadMoreData={loadMoreData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
});

export default PaginatedList;
