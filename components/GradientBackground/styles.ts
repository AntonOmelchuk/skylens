import { StyleSheet } from 'react-native';

const getStyles = ({ top }: { top: number }) => StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    paddingTop: top,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default getStyles;
