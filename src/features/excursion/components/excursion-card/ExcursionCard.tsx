import React, { FC } from 'react';
import { Excursion } from '../../../../shared/models/excursion-model';
import {
  ButtonExcursionStyled,
  ImageExcursionStyled,
  InfoExcursionStyled,
  TitleExcursionStyled,
  ExcursionCardContainer,
} from './excursion-card-styled';
import { Link } from 'react-router-dom';

interface ExcursionCardProps {
  excursion: Excursion;
}
const ExcursionCard: FC<ExcursionCardProps> = ({ excursion }) => {
  const { _id } = excursion;
  return (
    <ExcursionCardContainer>
      <TitleExcursionStyled>{excursion.nameExcursion}</TitleExcursionStyled>
      <ImageExcursionStyled>
        {
          <img
            src={excursion.imgExcursion} // Aquí estoy desectructurando.
            width={'350px'}
            alt={excursion.nameExcursion} //Aquí no estoy desesctructurando.
          ></img>
        }
      </ImageExcursionStyled>
      <InfoExcursionStyled>
        <p>Excursion: {excursion.nameExcursion}</p>
        <p>Level: {excursion.difficultyLevel}</p>
        <p>Need Equipment: {excursion.equipment}</p>
        <p>Organizer: {excursion.creator}</p>
      </InfoExcursionStyled>
      <Link to={`/excursions-detail/${_id}`}>
        <ButtonExcursionStyled>Adventure</ButtonExcursionStyled>
      </Link>
    </ExcursionCardContainer>
  );
};

export default ExcursionCard;
