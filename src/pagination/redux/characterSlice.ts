import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharacterState {
  characters: Character[];
  totalPages: number;
}

const initialState: CharacterState = {
  characters: [],
  totalPages: 0,
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<{ characters: Character[]; totalPages: number }>) => {
      const uniqueCharacters = action.payload.characters.filter(
        (newChar) => !state.characters.some((existingChar) => existingChar.id === newChar.id)
      );

      state.characters = [...state.characters, ...uniqueCharacters];
      state.totalPages = action.payload.totalPages;
    },
  },
});

export const { setCharacters } = characterSlice.actions;

export default characterSlice.reducer;
