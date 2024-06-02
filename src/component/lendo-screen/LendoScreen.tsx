import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {styles} from './lendoScreen.styles';

export const LendoScreen: React.FC<PropsWithChildren> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
