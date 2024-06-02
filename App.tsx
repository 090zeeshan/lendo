/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, View} from 'react-native';

import {RootRouter} from './src/navigation/RootRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} translucent />
        <RootRouter />
      </View>
    </SafeAreaProvider>
  );
}

export default App;
