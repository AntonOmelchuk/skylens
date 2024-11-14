import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/store/types/TStore';
import type IGeneral from './interfaces/IGeneral';

const selectGeneral = (state: RootState): IGeneral => state.general;

const selectCurrentUnits = createSelector(selectGeneral, (general) => general.units);

export default selectCurrentUnits;
