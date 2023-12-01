import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import {colors} from '../theme';
import Record from './Record';
import {useSelector} from 'react-redux';

const RecordContainer = React.memo(function RecordContainer() {
  const recordsState = useSelector((state) => state.records);
  const recordKeyIndex = useRef(0);

  return (
    <View style={styles.container}>
      <View style={styles.headerSectionContainer}>
        <Text style={styles.lapText}>Lap</Text>
        <Text style={styles.totalTimeText}>Total Time</Text>
        <Text style={styles.gapTimeText}>Gap Time</Text>
      </View>
      <ScrollView contentContainerStyle={styles.recordContainer}>
        {recordsState.records.map((record) => {
          return (
            <Record
              key={recordKeyIndex.current++}
              lap={record.lap}
              gap={record.gap}
              totalTime={record.totalTime}
            />
          );
        })}
      </ScrollView>
    </View>
  );
});

export default RecordContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
  },
  recordContainer: {
    gap: 10,
    flexDirection: 'column',
    overflow: 'hidden',
  },
  headerSectionContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 12,
  },
  totalTimeText: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize: 12,
    color: colors.white,
  },
  gapTimeText: {
    fontSize: 12,
    fontFamily: 'Inter_800ExtraBold',
    color: colors.white,
  },
  lapText: {
    fontSize: 12,
    fontFamily: 'Inter_800ExtraBold',
    color: colors.white,
  },
});
