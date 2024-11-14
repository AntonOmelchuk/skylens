import AppText from '../AppText/AppText';
import getStyles from './styles';

interface ITitle {
  title: string,
}

export default function Title({ title }: ITitle) {
  const styles = getStyles();

  return <AppText style={styles.title}>{title}</AppText>;
}
