import React from 'react';
import {View, Text, Image, StyleProp, ViewStyle} from 'react-native';
// import {styles} from './listTitle.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../theme/theme';

export const LendoStatusBar: React.FC<{}> = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: insets.top,
      }}
    />
  );
};
