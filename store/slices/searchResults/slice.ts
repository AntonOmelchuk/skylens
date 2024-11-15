import { createSlice } from '@reduxjs/toolkit';

import type ISearchResults from './interfaces/ISearchResults';

export const initialState: ISearchResults = {
  results: [],
};

const searchResutsSlice = createSlice({
  name: 'searchResuts',
  initialState,
  reducers: {
    addResult: (state, action) => {
      const { results } = state;
      const { payload } = action;

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

export const { addResult } = searchResutsSlice.actions;

export default searchResutsSlice.reducer;
