import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Clock = () => {
  return (
    <View style={styles.clockContainer}>
      <Text>Clock</Text>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  clockContainer: {
    flex: 2,
  },
});
