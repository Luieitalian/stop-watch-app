import {createSlice} from '@reduxjs/toolkit';

export const recordsSlice = createSlice({
  name: 'records',
  initialState: {
    records: [],
  },
  reducers: {
    addRecord: (state, action) => {
      state.records = [...state.records, action.payload];
      console.log('Records: ', state.records);
    },
    resetRecords: (state) => {
      state.records = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addRecord, resetRecords} = recordsSlice.actions;

export default recordsSlice.reducer;
