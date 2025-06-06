import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedJobPost: null,
};

const jobBoardSlice = createSlice({
  name: 'jobBoard',
  initialState,
  reducers: {
    setSelectedJobPost: (state, action) => {
      state.selectedJobPost = action.payload;
    },
  },
});

export const { setSelectedJobPost } = jobBoardSlice.actions;
export default jobBoardSlice.reducer;