import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';
import { APIStatus } from '../shared/models/api-status';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      user: {
        status: APIStatus.IDLE,
        loginStatus: 'idle',
        loginMessage: '',
      },
      excursions: {
        status: APIStatus.IDLE,
        excursionStatus: 'idle',
        excursionMessage: '',
        excursions: [],
        createExcursionStatus: 'idle',
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
