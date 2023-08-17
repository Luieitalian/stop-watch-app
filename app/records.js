import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Records = () => {
  return (
    <View style={styles.recordsScreen}>
      <Text>Records</Text>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  recordsScreen: {
    flex: 1,
  },
});