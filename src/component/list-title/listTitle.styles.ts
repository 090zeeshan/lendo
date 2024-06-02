import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.font.semiBold,
    fontSize: ss(16),
    lineHeight: ss(24),
    color: theme.colors.titleText,
    marginLeft: ss(24),
    marginTop: ss(24),
    marginBottom: ss(16),
  },
});
