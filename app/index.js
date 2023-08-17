import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../theme';
import Clock from '../components/Clock';
import Record from '../components/Record';
import Controls from '../components/Controls';
import {StatusBar, setStatusBarBackgroundColor} from 'expo-status-bar';

const App = () => {
  useEffect(() => {
    setStatusBarBackgroundColor(colors.background);
  }, []);

  return (
    <View style={styles.appContainer}>
      <Clock />
      <Record />
      <Controls />
      <StatusBar style="light" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
