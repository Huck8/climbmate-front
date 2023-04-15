import {
  ThunkAction,
  Action,
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import userReducer from '../features/user/user-slice';
import excursionReducer from '../features/excursion/excursion-slice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    excursions: excursionReducer,
  },
});

const rootReducer = combineReducers({
  user: userReducer,
  excursions: excursionReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
