import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  PageName: 'Hello',
};

const LayoutSlice = createSlice({
  name: 'LayoutTitles',
  initialState,
  reducers: {
    setPageName: (state, action) => {
      state.PageName = action.payload;
    },
  },
});

export const { setPageName } = LayoutSlice.actions;
export default LayoutSlice.reducer;
