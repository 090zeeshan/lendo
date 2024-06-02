import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBg,
    borderRadius: ss(3),
    padding: ss(8),
  },
  date: {
    fontFamily: theme.font.regular,
    fontSize: ss(12),
    lineHeight: ss(16),
    color: theme.colors.bodyText,
  },
  loanContainer: {flexDirection: 'row', marginTop: ss(8)},
  value: {
    fontFamily: theme.font.semiBold,
    fontSize: ss(14),
    lineHeight: ss(20),
    marginVertical: ss(2),
    color: theme.colors.titleText,
  },
  loan: {
    fontFamily: theme.font.semiBold,
    fontSize: ss(12),
    padding: ss(4),
    lineHeight: ss(16),
    marginVertical: ss(2),
    backgroundColor: theme.colors.veryLightGray,
    color: theme.colors.bodyText,
    marginLeft: ss(4),
  },
});
