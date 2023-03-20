import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { APIStatus } from '../../shared/models/api-status';
import { getTokenByUser } from './user-api';
import { AuthUser, UserStatus, UserToken } from './user-model';

const INITIAL_STATE: UserStatus = {
  status: APIStatus.IDLE,
  loginStatus: 'idle',
  loginMessage: '',
};

export const getNewUserTokenAsync = createAsyncThunk(
  'user/getNewUserToken',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    const apiResponse = await getTokenByUser(newUser as AuthUser);
    const data: UserToken = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(data.msg);
    }

    return data;
  },
);

export const userSlice = createSlice({
  name: 'userLogin',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getNewUserTokenAsync.pending, state => {
        state.status = APIStatus.LOADING;
        state.loginStatus = 'loading';
      })
      .addCase(
        getNewUserTokenAsync.fulfilled,
        (state, action: PayloadAction<UserToken>) => {
          state.status = APIStatus.IDLE;
          state.loginStatus = 'success';
          state.loginMessage = action.payload.msg;
          sessionStorage.setItem('Bearer', action.payload.accessToken);
        },
      )

      .addCase(getNewUserTokenAsync.rejected, (state, action: any) => {
        state.status = APIStatus.ERROR;
        state.loginStatus = 'error';
        state.loginMessage = action.error.message;
      });
  },
});

export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
