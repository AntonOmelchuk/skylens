import { createSlice } from '@reduxjs/toolkit';

import type IGeneral from './interfaces/IGeneral';

import { TemperatureUnits } from '@/constants/General';

export const initialState: IGeneral = {
  units: TemperatureUnits.Celsius,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    toggleUnits: (state) => {
      state.units = state.units === TemperatureUnits.Celsius
        ? TemperatureUnits.Fahrenheit : TemperatureUnits.Celsius;
    },
  },
});

export const { toggleUnits } = generalSlice.actions;

export default generalSlice.reducer;
