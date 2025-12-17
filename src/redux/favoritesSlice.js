import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite recipes
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      
      // Check if the recipe already exists in favorites by comparing idFood
      const existingIndex = state.favoriterecipes.findIndex(
        (favRecipe) => favRecipe.idFood === recipe.idFood
      );

      if (existingIndex !== -1) {
        // Recipe exists, remove it from favorites
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // Recipe doesn't exist, add it to favorites
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;