import { createSlice } from '@reduxjs/toolkit';

import type ISearchResults from './interfaces/ISearchResults';

export const initialState: ISearchResults = {
  currentCity: '',
  results: [],
};

const searchResutsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    addResult: (state, action) => {
      const { results } = state;
      const { payload } = action;

      if (payload.length < 2) return;

      const index = results.findIndex((result) => result === payload);

      if (index !== -1) {
        results.splice(index, 1);
      }

      results.unshift(payload);

      if (results.length > 5) {
        results.pop();
      }
    },
  },
});

export const { actions } = searchResutsSlice;
export const { setCurrentCity, addResult } = actions;

export default searchResutsSlice.reducer;
