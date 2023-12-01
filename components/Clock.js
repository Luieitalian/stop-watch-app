import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect} from 'react';
import {colors} from '../theme';
import {useSelector, useDispatch} from 'react-redux';
import {updateTimer, updateGap} from '../slices/timerSlice';

const Clock = React.memo(function Clock() {
  const timerState = useSelector((state) => state.timer);
  const recordsState = useSelector((state) => state.records);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!timerState.running) {
      return;
    }
    const timeRef = setTimeout(() => dispatch(updateTimer()), 50);
    const gapRef = setTimeout(() => dispatch(updateGap()), 50);
    return () => {
      clearTimeout(timeRef);
      clearTimeout(gapRef);
    };
  }, [timerState, dispatch]);

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
    <View style={styles.clockContainer}>
      <View style={styles.clock}>
        <View style={styles.stick}></View>
      </View>
      <View style={styles.totalTimeContainer}>
        <Text style={styles.elapsedTimeText}>{getHours(timerState.time)}</Text>
        <Text style={styles.elapsedTimeText}> : </Text>
        <Text style={styles.elapsedTimeText}>
          {getMinutes(timerState.time)}
        </Text>
        <Text style={styles.elapsedTimeText}> : </Text>
        <Text style={styles.elapsedTimeText}>
          {getSeconds(timerState.time)}
        </Text>
        <Text style={styles.elapsedTimeText}> .</Text>
        <Text style={styles.elapsedTimeText}>
          {getMilliseconds(timerState.time)}
        </Text>
      </View>
      <Text style={styles.gapTimeText}>
        <Text style={styles.gapTimeText}>{getHours(timerState.gap)}</Text>
        <Text style={styles.gapTimeText}> : </Text>
        <Text style={styles.gapTimeText}>{getMinutes(timerState.gap)}</Text>
        <Text style={styles.gapTimeText}> : </Text>
        <Text style={styles.gapTimeText}>{getSeconds(timerState.gap)}</Text>
        <Text style={styles.gapTimeText}> . </Text>
        <Text style={styles.gapTimeText}>
          {getMilliseconds(timerState.gap)}
        </Text>
      </Text>
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
