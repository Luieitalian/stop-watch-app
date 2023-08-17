import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Record = () => {
  return (
    <View style={styles.recordContainer}>
      <Text>Record</Text>
    </View>
  );
};

export default Record;

const styles = StyleSheet.create({
  recordContainer: {
    flex: 1,
  },
});
