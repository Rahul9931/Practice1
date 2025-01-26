import { RootState } from './store'; // Adjust the path based on your project structure

// Selector to get characters
export const selectCharacters = (state: RootState) => state.character.characters;

// Selector to get total pages
export const selectTotalPages = (state: RootState) => state.character.totalPages;
