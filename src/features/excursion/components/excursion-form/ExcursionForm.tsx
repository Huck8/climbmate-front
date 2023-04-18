import React from 'react';
import { ExcursionFormContainer } from './excursion-form-styled';
import { createNewExcursionAsync } from '../../excursion-slice';
import { useAppDispatch } from '../../../../app/hooks';

const ExcursionForm = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <ExcursionFormContainer
        data-testid="excursion-form"
        onSubmit={e => {
          e.preventDefault();
          dispatch(createNewExcursionAsync(e.currentTarget));
        }}
      >
        <label htmlFor="nameExcursion">Name</label>
        <input
          type="text"
          placeholder="Name"
          name="nameExcursion"
          id="nameExcursion"
          required
        />
        <label htmlFor="difficultyLevel"> Difficulty Level</label>
        <select name="difficultyLevel" id="difficultyLevel" required>
          <option>Select your difficulty level</option>
          <option value="Extreme">Extreme</option>
          <option value="Hard">Hard</option>
          <option value="Medium">Medium</option>
        </select>

        <label htmlFor="equipment"> Equipment?</label>
        <select name="equipment" id="equipment" required>
          <option>Select your equipment</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="--">--</option>
        </select>

        <label htmlFor="excursionImage" data-testid="photo">
          Upload your excursion photo:
        </label>

        <input
          className="file"
          type="file"
          accept="image/*"
          placeholder="imageURL"
          name="excursion"
          id="imgExcursion"
          required
        />

        <label htmlFor="nameExcursion">Organizer</label>
        <input
          type="text"
          placeholder="Creator"
          name="creator"
          id="creator"
          required
        />
        <button type="submit">Create excursion</button>
      </ExcursionFormContainer>
    </>
  );
};

export default ExcursionForm;
