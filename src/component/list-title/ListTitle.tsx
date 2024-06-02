import React from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';
import {styles} from './listTitle.styles';

interface ListTitleProps {
    title: string;
}

export const ListTitle: React.FC<ListTitleProps> = ({title}) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
};
