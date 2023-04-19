import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import ExcursionForm from '../../features/excursion/components/excursion-form/ExcursionForm';
import { selectExcursions } from '../../features/excursion/excursion-slice';
import { ExcursionFormStatusFeedBackError } from './create-form-page-styled';

export const CreateFormPages = () => {
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
    <div>
      <ExcursionForm></ExcursionForm>
      {feedBackUserExcursionForm()}
    </div>
  );
};

export default CreateFormPages;
