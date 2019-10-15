import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  back: {
    backgroundColor: colors.lighter,
  },
  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
});

export default styles;
