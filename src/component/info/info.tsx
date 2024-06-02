import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './info.styles';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import IoniCons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/theme';

interface InfoProps {
  title: string;
  value: string;
}

export const Info: React.FC<InfoProps> = ({title, value}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};
