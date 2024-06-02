import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {styles} from './feature.styles';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IoniCons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/theme';

export interface FeatureProps {
  title: string;
  icon: ImageSourcePropType;
}

export const Feature: React.FC<FeatureProps> = ({title, icon}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
