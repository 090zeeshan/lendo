import React from 'react';
import {View, Text, StyleProp, ViewStyle, Image} from 'react-native';
import {styles} from './portfolio.styles';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IoniCons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {theme} from '../../theme/theme';
import {Info} from '../info/info';
import {IC_WALLET} from '../../../asset/icon';
import {PortfolioChart} from '../portfolio-chart/PortfolioChart';

interface PortfolioProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const Portfolio: React.FC<PortfolioProps> = ({containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.portfolioContainer}>
        <View style={styles.portfolioHeader}>
          <View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Portfolio Value</Text>
              <SimpleLineIcon
                style={styles.infoIcon}
                name="question"
                size={14}
                color={theme.colors.bodyText}
              />
            </View>

            <View style={styles.valueContainer}>
              <Text style={styles.value}>
                1,100,000.
                <Text style={styles.valueDecimal}>00 SAR</Text>
              </Text>
              <IoniCons
                style={styles.eyeIcon}
                name="eye-off-outline"
                size={20}
                color={theme.colors.darkGray}
              />
            </View>
          </View>
          <View style={styles.chivronRightContainer}>
            <FontAwesome name="angle-right" size={24} />
          </View>
        </View>

        <View style={styles.chartContaineir}>
          <PortfolioChart />
        </View>

        <View style={styles.infoContainer}>
          <Info title="O/S Loans" value="60 Loans" />
          <Info title="O/S Principle" value="1,000,000 SAR" />
          <Info title="Exp. Profit" value="100,000 SAR" />
        </View>
      </View>

      <View style={styles.walletContainer}>
        <Image style={styles.walletIcon} source={IC_WALLET} />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>Wallet Balance</Text>
          <Text style={styles.balanceValue}>1,540,680.12 SAR</Text>
        </View>
        <View style={styles.plusIconContainer}>
          <FontAwesome6 name="plus" size={24} color={theme.colors.darkBlue} />
        </View>
      </View>
    </View>
  );
};
