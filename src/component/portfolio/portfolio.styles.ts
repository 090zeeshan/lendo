import {StyleSheet} from 'react-native';
import {ss} from '../../theme/scaledPixel';
import {theme} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondaryBackground,
    borderRadius: ss(12),
    paddingTop: ss(20),
  },
  portfolioContainer: {
    paddingHorizontal: ss(16),
  },
  title: {
    color: theme.colors.bodyText,
    fontSize: ss(12),
    lineHeight: ss(16),
    fontFamily: theme.font.regular,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  infoIcon: {
    marginLeft: ss(7),
  },
  valueContainer: {
    flexDirection: 'row',
    marginTop: ss(8),
    alignItems: 'center',
  },
  value: {
    fontFamily: theme.font.semiBold,
    fontSize: ss(24),
    lineHeight: ss(28),
    color: theme.colors.titleText,
  },
  valueDecimal: {
    fontSize: ss(16),
    lineHeight: ss(24),
  },
  eyeIcon: {
    marginLeft: ss(12),
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: ss(24),
    justifyContent: 'space-between',
    marginBottom: ss(20),
  },
  walletIcon: {
    width: ss(48),
    height: ss(48),
  },
  balanceContainer: {
    marginLeft: ss(12),
    alignItems: 'flex-end',
  },
  balanceTitle: {
    fontFamily: theme.font.regular,
    fontSize: ss(12),
    lineHeight: ss(16),
    color: theme.colors.bodyText,
  },
  balanceValue: {
    fontFamily: theme.font.medium,
    fontSize: ss(14),
    lineHeight: ss(20),
    color: theme.colors.titleText,
    marginTop: ss(4),
  },
  walletContainer: {
    borderTopWidth: ss(1),
    borderColor: theme.colors.darkDivider,
    flexDirection: 'row',
    padding: ss(16),
    alignItems: 'center',
  },
  plusIconContainer: {flex: 1, padding: ss(12), alignItems: 'flex-end'},
  chivronRightContainer: {
    paddingHorizontal: ss(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  portfolioHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  chartContaineir: {height: 220},
});
