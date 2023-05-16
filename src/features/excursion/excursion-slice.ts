import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/models/api-status';
import { Excursion } from '../../shared/models/excursion-model';
import {
  createNewExcursion,
  getAllExcursions,
  // getExcursionById,
} from './excursion-api';

interface ExcursionStatus {
  status: APIStatus;
  excursionStatus: 'loading' | 'success' | 'error' | 'idle';
  excursionMessage: string | undefined;
  excursions: Excursion[];
  excursion: Excursion;
  createExcursionStatus: 'loading' | 'success' | 'error' | 'idle';
}

const STATE_NAME = 'excursion';

export interface ExcursionResponse {
  msg: string;
  excursions: Excursion[];
}

export interface CreateExcursionResponse {
  msg: string;
  excursions: Excursion;
}

const initialState: ExcursionStatus = {
  status: APIStatus.IDLE,
  excursionStatus: 'idle',
  excursionMessage: '',
  excursions: [],
  excursion: {
    _id: '',
    imgExcursion: '',
    nameExcursion: '',
    // date: new Date('2023-02-01'),
    difficultyLevel: '',
    equipment: '',
    creator: '',
  },
  createExcursionStatus: 'idle',
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

export const getExcursionByIdAsync = createAsyncThunk(
  `${STATE_NAME}/getExcursionById`,
  async (id: string) => {
    const apiResponse = await getExcursionById(id);
    const data: CreateExcursionResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }

    return data;
  },
);

export const createNewExcursionAsync = createAsyncThunk(
  `${STATE_NAME}/createExcursion`,
  async (form: HTMLFormElement) => {
    const newExcursionForm = new FormData(form);
    const apiResponse = await createNewExcursion(newExcursionForm);
    const data: CreateExcursionResponse = await apiResponse.json();
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
      })

      .addCase(createNewExcursionAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.createExcursionStatus = 'loading';
      })
      .addCase(
        createNewExcursionAsync.fulfilled,
        (state, action: PayloadAction<CreateExcursionResponse>) => {
          state.status = APIStatus.IDLE;
          state.createExcursionStatus = 'success';
          state.excursionMessage = action.payload.msg;
        },
      )
      .addCase(createNewExcursionAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.createExcursionStatus = 'error';
        state.excursionMessage = action.error.message;
      })
      .addCase(getExcursionByIdAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.excursionStatus = 'loading';
      })
      .addCase(
        getExcursionByIdAsync.fulfilled,
        (state, action: PayloadAction<CreateExcursionResponse>) => {
          state.status = APIStatus.IDLE;
          state.excursionStatus = 'success';
          state.excursionMessage = action.payload.msg;
          state.excursion = action.payload.excursions;
        },
      )
      .addCase(getExcursionByIdAsync.rejected, (state, action) => {
        state.status = APIStatus.ERROR;
        state.excursionStatus = 'error';
        state.excursionMessage = action.error.message;
      });
  },
});

export const selectExcursions = (state: RootState) => state.excursions;
export default excursionSlice.reducer;
