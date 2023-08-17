import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../theme';

const Clock = React.memo(function Clock({elapsedTime, gapTime}) {
  const formatElapsedTime = () => {
    return new Date(elapsedTime).toISOString().slice(11, -1);
  };
  const formatGapTime = () => {
    return new Date(gapTime).toISOString().slice(11, -1);
  };

  return (
    <View style={styles.clockContainer}>
      <View style={styles.clock}>
        <View style={styles.stick}></View>
      </View>
      <Text style={styles.elapsedTime}>{formatElapsedTime()}</Text>
      <Text style={styles.gapTime}>{formatGapTime()}</Text>
    </View>
  );
});

export default Clock;

const styles = StyleSheet.create({
  clockContainer: {
    flex: 2,
    borderWidth: 1,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  clock: {
    width: 300,
    height: 300,
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
  elapsedTime: {
    color: colors.white,
    fontSize: 32,
  },
  gapTime: {
    color: colors.white,
    fontSize: 16,
    opacity: 0.7,
  },
});
