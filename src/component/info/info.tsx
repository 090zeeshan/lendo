import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './info.styles';

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
