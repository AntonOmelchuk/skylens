import { View } from 'react-native';

import ResultsItem from './ResultsItem';
import getStyles from './styles';

import useActions from '@/store/hooks/useActions';
import { useAppSelector } from '@/store/hooks/useApp';
import { selectResults } from '@/store/slices/searchResults/selectors';
import selectCurrentTheme from '@/store/slices/theme/selectors';

interface IResults {
  hideResultsCallback: (value: string) => void,
}

export default function Results({ hideResultsCallback }: IResults) {
  const theme = useAppSelector(selectCurrentTheme);
  const results = useAppSelector(selectResults);

  const { setCurrentCity } = useActions();

  const styles = getStyles({ theme });

  const onPressHandler = (value: string) => {
    setCurrentCity(value);
    hideResultsCallback(value);
  };

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {results.map((result) => <ResultsItem key={result} result={result} onPress={() => onPressHandler(result)} />)}
    </View>
  );
}
