import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';
import {styles} from './chartToolTip.styles';

interface ChartToolTipProps {
  date: string;
  value: string;
  loans: number;
  containerStyle?: StyleProp<ViewStyle>;
}

export const ChartToolTip: React.FC<ChartToolTipProps> = ({
  date,
  value,
  loans,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.loanContainer}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.loan}>{loans} Loans</Text>
      </View>
    </View>
  );
};
