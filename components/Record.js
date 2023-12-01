import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../theme';

const Record = React.memo(function Record({lap, gap, totalTime}) {
  const getHours = (time) => {
    const date = new Date(time).toISOString();
    return date.slice(11, 13);
  };
  const getMinutes = (time) => {
    const date = new Date(time).toISOString();
    return date.slice(14, 16);
  };
  const getSeconds = (time) => {
    const date = new Date(time).toISOString();
    return date.slice(17, 19);
  };
  const getMilliseconds = (time) => {
    const date = new Date(time).toISOString();
    return date.slice(20, -3);
  };

  return (
    <View style={styles.record}>
      <View style={styles.lapContainer}>
        <Text style={styles.lapText}>{lap}</Text>
      </View>
      <View style={styles.totalTimeContainer}>
        <Text style={styles.timeText}>{getHours(totalTime)}</Text>
        <Text style={styles.timeText}> : </Text>
        <Text style={styles.timeText}>{getMinutes(totalTime)}</Text>
        <Text style={styles.timeText}> : </Text>
        <Text style={styles.timeText}>{getSeconds(totalTime)}</Text>
        <Text style={styles.timeText}> . </Text>
        <Text style={styles.timeText}>{getMilliseconds(totalTime)}</Text>
      </View>
      <View style={styles.gapContainer}>
        <Text style={styles.timeText}>{getHours(gap)}</Text>
        <Text style={styles.timeText}> : </Text>
        <Text style={styles.timeText}>{getMinutes(gap)}</Text>
        <Text style={styles.timeText}> : </Text>
        <Text style={styles.timeText}>{getSeconds(gap)}</Text>
        <Text style={styles.timeText}> . </Text>
        <Text style={styles.timeText}>{getMilliseconds(gap)}</Text>
      </View>
    </View>
  );
});

export default Record;

const styles = StyleSheet.create({
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
  timeText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
  lapText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
  lapContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
  },
  gapText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
  gapContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  totalTimeText: {
    color: colors.white,
    fontFamily: 'Inter_800ExtraBold',
  },
  totalTimeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});
