import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {colors} from '../theme';
import Clock from '../components/Clock';
import Record from '../components/Record';
import Controls from '../components/Controls';
import {StatusBar} from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import useTimer from '../hooks/useTimer';
import {Stack} from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  const {time, isRunning, handleDone, handlePause, handleStart} = useTimer();
  const handleSave = () => {};

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.appContainer}>
      <Stack.Screen options={{title: 'home'}} />
      <Clock elapsedTime={time} gapTime={0} />
      <Record />
      <Controls
        handleDone={handleDone}
        handleSave={handleSave}
        handlePause={handlePause}
        handleStart={handleStart}
        isRunning={isRunning}
      />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
