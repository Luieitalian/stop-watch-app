import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import {colors} from '../theme';

const Clock = React.memo(function Clock({elapsedTime, gapTime}) {
  const formatTime = useCallback((time) => {
    const date = new Date(time).toISOString();
    const hours = date.slice(11, 13);
    const minutes = date.slice(14, 16);
    const seconds = date.slice(17, 19);
    const milliseconds = date.slice(20, -3);
    return [hours, minutes, seconds, milliseconds];
  }, []);

  return (
    <View style={styles.clockContainer}>
      <View style={styles.clock}>
        <View style={styles.stick}></View>
      </View>
      <View style={styles.totalTimeContainer}>
        <Text style={styles.elapsedTimeText}>{formatTime(elapsedTime)[0]}</Text>
        <Text style={styles.elapsedTimeText}> : </Text>
        <Text style={styles.elapsedTimeText}>{formatTime(elapsedTime)[1]}</Text>
        <Text style={styles.elapsedTimeText}> : </Text>
        <Text style={styles.elapsedTimeText}>{formatTime(elapsedTime)[2]}</Text>
        <Text style={styles.elapsedTimeText}> .</Text>
        <Text style={styles.elapsedTimeText}>{formatTime(elapsedTime)[3]}</Text>
      </View>
      <Text style={styles.gapTimeText}>{}</Text>
    </View>
  );
});

export default Clock;

const styles = StyleSheet.create({
  clockContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  clock: {
    width: '70%',
    aspectRatio: 1,
    borderRadius: 320,
    borderWidth: 10,
    borderColor: colors.primary,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  stick: {
    height: '50%',
    width: 12,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  totalTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: -100,
  },
  elapsedTimeText: {
    textAlign: 'center',
    fontFamily: 'Inter_800ExtraBold',
    color: colors.white,
    fontSize: 32,
    flex: 1,
  },
  gapTimeText: {
    fontFamily: 'Inter_600SemiBold',
    color: colors.white,
    fontSize: 16,
    opacity: 0.7,
  },
});
