import AppText from '../AppText/AppText';
import getStyles from './styles';

interface IError {
  error: string,
}

export default function Error({ error }: IError) {
  const styles = getStyles();

  return (
    <AppText style={styles.text}>
      {error}
    </AppText>
  );
}
