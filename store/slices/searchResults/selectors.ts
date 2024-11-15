import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/store/types/TStore';
import type ISearchResults from './interfaces/ISearchResults';

const selectSearchResults = (state: RootState): ISearchResults => state.searchResuts;

const selectResults = createSelector(selectSearchResults, (searchResuts) => searchResuts.results);

export default selectResults;
