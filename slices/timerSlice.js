import {createSlice} from '@reduxjs/toolkit';

export const timerSlice = createSlice({
  name: 'time',
  initialState: {
    time: 0,
    lap: 1,
    running: false,
    gap: 0,
  },
  reducers: {
    updateTimer: (state) => {
      state.time += 100;
    },
    updateGap: (state) => {
      state.gap += 100;
    },
    resetGap: (state) => {
      state.gap = 0;
    },
    startTimer: (state) => {
      state.running = true;
    },
    pauseTimer: (state) => {
      state.running = false;
    },
    doneTimer: (state) => {
      state.time = 0;
      state.running = false;
      state.lap = 1;
    },
    incrementLap: (state) => {
      state.lap += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startTimer,
  updateGap,
  pauseTimer,
  updateTimer,
  doneTimer,
  incrementLap,
  resetGap,
} = timerSlice.actions;

export default timerSlice.reducer;
