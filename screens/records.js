import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme';

const Records = React.memo(function Records() {
  return (
    <SafeAreaView style={styles.recordsContainer}>
      <Text style={styles.text}>Records</Text>
    </SafeAreaView>
  );
});
export default Records;

const styles = StyleSheet.create({
  recordsContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.white,
  },
});
