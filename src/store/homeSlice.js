import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://financialmodelingprep.com/api/v3/';
const apiKey = '?apikey=997aab514b57afa044984ff55c637aea';
const statementsEndPoint = 'financial-statement-symbol-lists';
// const incomeEndPoint = 'income-statement/';
// const limitconstrain = '&limit=';
// const periodconstrain = "&period=";

const initialState = {
  statements: [],
  isLoading: true,
  error: undefined,
  fetched: false,
  display: [],
};

export const getStatementsNames = createAsyncThunk('result/getStatementsNames', async (thunkAPI) => {
  try {
    const getStatementsUrl = `${baseUrl}${statementsEndPoint}${apiKey}`;
    const resp = await axios(getStatementsUrl);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

const homeSlice = createSlice({
  name: 'statements',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getStatementsNames.pending]: (state) => {
      state.isLoading = true;
      state.fetched = false;
    },
    [getStatementsNames.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
      state.fetched = false;
    },
    [getStatementsNames.fulfilled]: (state, action) => {
      const myPayload = action.payload;
      state.isLoading = false;
      state.statements = myPayload;
      state.fetched = true;

      const shownItems = [];

      for (let i = 0; i < 30; i += 1) {
        const rndInd = Math.floor(Math.random() * myPayload.length);
        const tmpName = myPayload[rndInd];
        if (!shownItems.includes(tmpName)) {
          shownItems.push(tmpName);
        }
      }

      state.display = shownItems;
    },
  },
});

export default homeSlice.reducer;
