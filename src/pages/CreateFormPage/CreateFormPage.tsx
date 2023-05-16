import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ExcursionForm from '../../features/excursion/components/excursion-form/ExcursionForm';
import { selectExcursions } from '../../features/excursion/excursion-slice';

import {
  CreateFormPageContainer,
  ExcursionFormStatusFeedBackError,
} from './create-form-page-styled';

export const CreateFormPage = () => {
  const { createExcursionStatus } = useAppSelector(selectExcursions);
  const feedBackUserExcursionForm = () => {
    switch (createExcursionStatus) {
      case 'error':
        return (
          <ExcursionFormStatusFeedBackError>
            An error has occurred, try again.
          </ExcursionFormStatusFeedBackError>
        );

      case 'success':
        return <Navigate to={'/excursions'} />;
    }
  };

  return (
    <CreateFormPageContainer>
      <h1>Inscríbete</h1>
      <ExcursionForm></ExcursionForm>
      {feedBackUserExcursionForm()}
    </CreateFormPageContainer>
  );
};

export default CreateFormPage;
