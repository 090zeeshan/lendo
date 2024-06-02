/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {RootRouter} from './src/navigation/RootRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} translucent />
        <RootRouter />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({container: {flex: 1}});

export default App;
