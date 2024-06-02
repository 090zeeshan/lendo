import {Dimensions, StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  toolTipContainer: {
    position: 'absolute',
    left: ss(37),
  },
  container: {flex: 1},
  chart: {flex: 1, width: width - ss(80)},
  xAxis: {
    width: width - ss(80),
    height: ss(20),
  },
});
