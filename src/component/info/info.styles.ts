import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.font.regular,
    fontSize: ss(12),
    lineHeight: ss(16),
    color: theme.colors.bodyText,
  },
  value: {
    fontFamily: theme.font.semiBold,
    fontSize: ss(14),
    lineHeight: ss(20),
    color: theme.colors.titleText,
  },
});
