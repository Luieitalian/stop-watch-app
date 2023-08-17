import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../theme';

const Record = React.memo(function Record(props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.recordContainer}>
        <View style={styles.record}>
          <Text style={styles.lapText}>1</Text>
          <Text style={styles.gapText}>00 : 02 . 23</Text>
          <Text style={styles.totalTimeText}>00 : 12 . 12</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.lapText}>1</Text>
          <Text style={styles.gapText}>00 : 02 . 23</Text>
          <Text style={styles.totalTimeText}>00 : 12 . 12</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.lapText}>1</Text>
          <Text style={styles.gapText}>00 : 02 . 23</Text>
          <Text style={styles.totalTimeText}>00 : 12 . 12</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.lapText}>1</Text>
          <Text style={styles.gapText}>00 : 02 . 2</Text>
          <Text style={styles.totalTimeText}>00 : 12 . 2</Text>
        </View>
        <View style={styles.record}>
          <Text style={styles.lapText}>1</Text>
          <Text style={styles.gapText}>00 : 02 . 2</Text>
          <Text style={styles.totalTimeText}>00 : 12 . 2</Text>
        </View>
      </ScrollView>
    </View>
  );
});

export default Record;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  recordContainer: {
    justifyContent: 'flex-start',
    gap: 10,
    paddingVertical: 10,
  },
  record: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 6,
    height: 60,
    borderColor: colors.primaryOutline,
    borderRadius: 50,
  },
  lapText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
  gapText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
  totalTimeText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
});
