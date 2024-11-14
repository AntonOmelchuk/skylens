import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type ITranslates from './interfaces/ITranslates';

import i18n from '@/i18n';

export const initialState: ITranslates = {
  locale: 'en',
  loading: false,
};

export const setLocale = createAsyncThunk(
  'translates/setLocale',
  async (locale:string) => {
    await i18n.changeLanguage(locale);
    return locale;
  },
);

const translatesSlice = createSlice({
  name: 'translates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setLocale.pending, (state) => {
        state.loading = true;
      })
      .addCase(setLocale.fulfilled, (state, action) => {
        state.loading = false;
        state.locale = action.payload;
      })
      .addCase(setLocale.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default translatesSlice.reducer;
