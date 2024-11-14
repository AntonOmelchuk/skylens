import type { RootState } from '../../types/TStore';
import type ITranslate from './interfaces/ITranslates';

const selectLocale = (state: RootState): ITranslate['locale'] => state.translates.locale;

export default selectLocale;
