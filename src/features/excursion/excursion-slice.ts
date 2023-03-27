import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/models/api-status';
import { Excursion } from '../../shared/models/excursion-model';
import { getAllExcursions } from './excursion-api';

interface ExcursionStatus {
  status: APIStatus;
  excursionStatus: 'loading' | 'success' | 'error' | 'idle';
  excursionMessage: string | undefined;
  excursions: Excursion[];
}

const STATE_NAME = 'excursion';

export interface ExcursionResponse {
  msg: string;
  excursions: Excursion[];
}

const initialState: ExcursionStatus = {
  status: APIStatus.IDLE,
  excursionStatus: 'idle',
  excursionMessage: '',
  excursions: [],
};

export const getAllExcursionsAsync = createAsyncThunk(
  `${STATE_NAME}/getAllExcursions`,
  async () => {
    const apiResponse = await getAllExcursions();
    const data: ExcursionResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }

    return data;
  },
);

export const excursionSlice = createSlice({
  name: STATE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllExcursionsAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.excursionStatus = 'loading';
      })
      .addCase(
        getAllExcursionsAsync.fulfilled,
        (state, action: PayloadAction<ExcursionResponse>) => {
          state.status = APIStatus.IDLE;
          state.excursionStatus = 'success';
          state.excursionMessage = action.payload.msg;
          state.excursions = action.payload.excursions;
        },
      )

      .addCase(getAllExcursionsAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.excursionStatus = 'error';
        state.excursionMessage = action.error.message;
      });
  },
});

export const selectExcursions = (state: RootState) => state.excursions;
export default excursionSlice.reducer;
