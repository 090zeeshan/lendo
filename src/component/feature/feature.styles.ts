import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: ss(114),
    height: ss(104),
    borderRadius: ss(12),
    backgroundColor: theme.colors.secondaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: ss(48),
    height: ss(48),
  },
  title: {
    fontFamily: theme.font.semiBold,
    fontSize: ss(12),
    lineHeight: ss(16),
    marginTop: ss(8),
    color: theme.colors.titleText,
  },
});
