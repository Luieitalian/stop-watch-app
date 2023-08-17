import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import ControlButton from './ControlButton';

const Controls = () => {
  return (
    <View style={styles.controlsContainer}>
      <ControlButton title="Done"></ControlButton>
      <ControlButton title="Save Rec"></ControlButton>
      <ControlButton title="Start/Stop"></ControlButton>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  controlsContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
