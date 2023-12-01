import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../theme';
import ControlButton from './ControlButton';
import {useSelector, useDispatch} from 'react-redux';
import {
  doneTimer,
  pauseTimer,
  startTimer,
  incrementLap,
  resetGap,
} from '../slices/timerSlice';
import {addRecord, resetRecords} from '../slices/recordsSlice';
const Controls = React.memo(function Controls({setIsLimitRecordsVisible}) {
  const timerState = useSelector((state) => state.timer);
  const recordsState = useSelector((state) => state.records);
  const dispatch = useDispatch();

  const donePressed = () => {
    dispatch(doneTimer());
    dispatch(resetRecords());
  };

  const savePressed = () => {
    if (recordsState.records.length >= 20) {
      console.log('No more records!');
      setIsLimitRecordsVisible(true);
      setTimeout(() => {
        setIsLimitRecordsVisible(false);
      }, 2000);
    } else {
      const newRecord = {
        lap: timerState.lap,
        gap: timerState.gap,
        // recordsState.records.at(-1)
        //   ? timerState.time - recordsState.records.at(-1).totalTime
        //   : 0,
        totalTime: timerState.time,
      };
      dispatch(addRecord(newRecord));
      dispatch(resetGap());
      dispatch(incrementLap());
    }

    console.log('Time (ms): ', timerState.time);
    console.log('Lap: ', timerState.lap);
  };

  const startStopPressed = () => {
    if (timerState.running) {
      dispatch(pauseTimer());
    } else {
      dispatch(startTimer());
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
        title={timerState.running ? 'Stop' : 'Start'}
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
