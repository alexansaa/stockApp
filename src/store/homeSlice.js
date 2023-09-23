import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://financialmodelingprep.com/api/v3/';
// const apiKey = '?apikey=997aab514b57afa044984ff55c637aea';
const apiKey = '?apikey=6b95001963e6cd8dcebf69ae7bf0a25c';
const activesEndPoint = 'actives';

const initialState = {
  actives: [],
  isLoading: true,
  error: undefined,
  fetched: false,
  filterActive: [],
};

export const getActivesNames = createAsyncThunk('result/getActivesNames', async (thunkAPI) => {
  try {
    const getActivesUrl = `${baseUrl}${activesEndPoint}${apiKey}`;
    const resp = await axios(getActivesUrl);
    const myData = [];
    resp.data.forEach((element) => {
      const tmpActive = {
        ticker: element.ticker,
        companyName: element.companyName,
        changes: element.changes,
        changesPercentage: element.changesPercentage,
        price: element.price,
      };
      myData.push(tmpActive);
    });
    return myData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

const homeSlice = createSlice({
  name: 'actives',
  initialState,
  reducers: {
    setFilteredActive: (state, action) => {
      state.filterActive = action.payload;
    },
  },
  extraReducers: {
    [getActivesNames.pending]: (state) => {
      state.isLoading = true;
      state.fetched = false;
    },
    [getActivesNames.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.fetched = false;
    },
    [getActivesNames.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.actives = action.payload;
      state.filterActive = action.payload;
      state.fetched = true;
    },
  },
});

export const { setFilteredActive } = homeSlice.actions;
export default homeSlice.reducer;
