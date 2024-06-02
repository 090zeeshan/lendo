import React from 'react';
import {ScrollView, View} from 'react-native';
import {UserInfo} from '../../component/user-info/UserInfo';
import {styles} from './home.styles';
import {Portfolio} from '../../component/portfolio/Portfolio';
import {
  IC_AUTO_INVEST,
  IC_DEAL_ROOM,
  IC_LOYALTY,
  IC_REFERRAL,
  IC_STREAK,
  IC_UPGRADE,
} from '../../../asset/icon';
import {FeatureList} from '../../component/feature-list/FeatureList';
import {LendoScreen} from '../../component/lendo-screen/LendoScreen';
import {LendoStatusBar} from '../../component/lendo-status-bar/LendoStatusBar';
import {IMG_PROFILE} from '../../../asset/image';

const FEATURES = [
  {title: 'Auto Invest', icon: IC_AUTO_INVEST},
  {title: 'Deal Room', icon: IC_DEAL_ROOM},
  {title: 'Loyalty', icon: IC_LOYALTY},
  {title: 'Referral', icon: IC_REFERRAL},
  {title: 'Streak', icon: IC_STREAK},
  {title: 'Upgrade', icon: IC_UPGRADE},
];

export const Home = () => {
  return (
    <LendoScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LendoStatusBar />
        <View style={styles.userInfoContainer}>
          <UserInfo name="Mary Doe" image={IMG_PROFILE} />
        </View>

        <Portfolio containerStyle={styles.portfolioContainer} />

        <FeatureList features={FEATURES} />
      </ScrollView>
    </LendoScreen>
  );
};
