import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "/fetchCharacters",
  async () => {
    try {
      const response = await axios({
        url: "https://rickandmortyapi.com/graphql",
        method: "post",
        data: {
          query: `
        {
          characters {
            results {
              name
            }
          }
        }
          `,
        },
      });

      return response.data.data.characters.results;
    } catch (error) {
      throw error.response.status;
    }
  }
);

const initialState = {
  characters: [],
};

const rickandmorty = createSlice({
  name: "rickandmorty",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      debugger;
      state.characters = action.payload;
      state.loading = false;
    },
    [fetchCharacters.pending]: (state) => {
      state.loading = true;
    },
    [fetchCharacters.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// Reducer
export default rickandmorty.reducer;
