import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import ControlButton from './ControlButton';

const Controls = React.memo(function Controls({
  handleDone,
  handlePause,
  handleStart,
  handleSave,
  isRunning,
}) {
  const donePressed = () => {
    handleDone();
  };

  const savePressed = () => {
    handleSave();
  };

  const startStopPressed = () => {
    if (isRunning) {
      handlePause();
    } else {
      handleStart();
    }
  };

  return (
    <View style={styles.controlsContainer}>
      <ControlButton
        functionality={donePressed}
        title="Done"
        name="done"
      ></ControlButton>
      <ControlButton
        functionality={savePressed}
        title="Save Record"
        name="save"
      ></ControlButton>
      <ControlButton
        functionality={startStopPressed}
        title={isRunning ? 'Stop' : 'Start'}
        name="start-stop"
      ></ControlButton>
    </View>
  );
});

export default Controls;

const styles = StyleSheet.create({
  controlsContainer: {
    flex: 0.7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: colors.primaryOutline,
  },
});
