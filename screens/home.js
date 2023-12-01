import {StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {colors} from '../theme';
import Clock from '../components/Clock';
import RecordContainer from '../components/RecordContainer';
import Controls from '../components/Controls';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView} from 'react-native-safe-area-context';
import LimitRecords from '../warning-modals/LimitRecords';
import {useSelector, useDispatch} from 'react-redux';

const Home = React.memo(function Home({onLayoutRootView}) {
  const [isLimitRecordsVisible, setIsLimitRecordsVisible] = useState(false);
  //const recordsState = useSelector((state) => state.records);
  //const timerState = useSelector((state) => state.timer);
  //const dispatch = useDispatch();

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.homeContainer}>
      <LimitRecords visible={isLimitRecordsVisible} />
      <Clock />
      <RecordContainer />
      <Controls setIsLimitRecordsVisible={setIsLimitRecordsVisible} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
});
export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
