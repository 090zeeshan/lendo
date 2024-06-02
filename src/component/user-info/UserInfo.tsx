import React from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';
import {styles} from './userInfo.styles';
import {IC_BELL} from '../../../asset/icon';
import {IMG_PROFILE} from '../../../asset/image';
import {ImageSourcePropType} from 'react-native';

interface UserInfoProps {
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
  image: ImageSourcePropType;
}
export const UserInfo: React.FC<UserInfoProps> = ({
  name,
  image,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.profileContainer}>
        <Image source={image} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
      <View style={styles.notificationContainer}>
        <Image source={IC_BELL} style={styles.bell} />
      </View>
    </View>
  );
};
