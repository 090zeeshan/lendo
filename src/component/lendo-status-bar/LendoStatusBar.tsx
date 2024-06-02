import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './lendoStatusBar.styles';

export const LendoStatusBar: React.FC<{}> = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.statusBar,
        {
          height: insets.top,
        },
      ]}
    />
  );
};
