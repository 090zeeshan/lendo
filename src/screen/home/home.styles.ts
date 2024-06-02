import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  userInfoContainer: {
    backgroundColor: theme.colors.primary,
    height: ss(123),
    borderBottomLeftRadius: ss(12),
    borderBottomRightRadius: ss(12),
    paddingTop: ss(17),
    paddingHorizontal: ss(24),
  },
  portfolioContainer: {
    marginHorizontal: ss(24),
    marginTop: -ss(51),
  },
});
