import { View } from 'react-native';

import ResultsItem from './ResultsItem';
import getStyles from './styles';

import { useAppSelector } from '@/store/hooks/useApp';
import selectResults from '@/store/slices/searchResults/selectors';
import selectCurrentTheme from '@/store/slices/theme/selectors';

export default function Results() {
  const theme = useAppSelector(selectCurrentTheme);
  const results = useAppSelector(selectResults);

  const styles = getStyles({ theme });

  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {results.map((result) => <ResultsItem key={result} result={result} />)}
    </View>
  );
}
