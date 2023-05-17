import React, { FC, useEffect } from 'react';
import {
  ButtonExcursionStyled,
  ExcursionCardContainer,
  ImageExcursionStyled,
  InfoExcursionStyled,
  TitleExcursionStyled,
} from '../excursion-card/excursion-card-styled';
import { getExcursionByIdAsync, selectExcursions } from '../../excursion-slice';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';

interface ExcursionCardDetailsProps {
  _id: string;
}

const ExcursionCardDetails: FC<ExcursionCardDetailsProps> = ({ _id }) => {
  const { excursion } = useAppSelector(selectExcursions);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getExcursionByIdAsync(_id));
  }, [dispatch, _id]);

  return (
    <ExcursionCardContainer>
      {excursion ? (
        <>
          <TitleExcursionStyled>{excursion.nameExcursion}</TitleExcursionStyled>
          <ImageExcursionStyled>
            <img
              src={excursion.imgExcursion}
              width={'350px'}
              alt={excursion.nameExcursion}
            ></img>
          </ImageExcursionStyled>
          <InfoExcursionStyled>
            <p>Excursion: {excursion.nameExcursion}</p>
            <p>Level: {excursion.difficultyLevel}</p>
            <p>Need Equipment: {excursion.equipment}</p>
            <p>Organizer: {excursion.creator}</p>
          </InfoExcursionStyled>
          <ButtonExcursionStyled>Adventure</ButtonExcursionStyled>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </ExcursionCardContainer>
  );
};

export default ExcursionCardDetails;
