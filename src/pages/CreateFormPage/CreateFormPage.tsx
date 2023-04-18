import React from 'react';
import ExcursionForm from '../../features/excursion/components/excursion-form/ExcursionForm';
import { CreateFormPageStyled } from './create-form-page-styled';

const CreateFormPage = () => {
  return (
    <CreateFormPageStyled>
      <ExcursionForm></ExcursionForm>
    </CreateFormPageStyled>
  );
};

export default CreateFormPage;
