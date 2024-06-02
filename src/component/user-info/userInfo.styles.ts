import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: ss(40),
    height: ss(40),
  },
  textContainer: {
    marginLeft: ss(8),
  },
  welcomeText: {
    color: theme.colors.text,
    fontSize: ss(12),
    lineHeight: ss(16),
    fontFamily: theme.font.semiBold,
  },
  nameText: {
    color: theme.colors.text,
    fontSize: ss(16),
    lineHeight: ss(24),
    fontFamily: theme.font.semiBold,
  },
  notificationContainer: {
    position: 'relative',
  },

  bell: {
    width: ss(24),
    height: ss(24),
  },
});
