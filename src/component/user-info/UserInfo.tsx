import React from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';
import {styles} from './userInfo.styles';
import {IC_BELL} from '../../../asset/icon';
import {IMG_PROFILE} from '../../../asset/image';

interface UserInfoProps {
  containerStyle?: StyleProp<ViewStyle>;
}
export const UserInfo: React.FC<UserInfoProps> = ({containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.profileContainer}>
        <Image source={IMG_PROFILE} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.nameText}>Mary Doe</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Image source={IC_BELL} style={styles.bell} />
      </View>
    </View>
  );
};
