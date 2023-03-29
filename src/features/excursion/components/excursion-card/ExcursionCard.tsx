import React, { FC } from 'react';
import { Excursion } from '../../../../shared/models/excursion-model';
import {
  ButtonExcursionStyled,
  ImageExcursionStyled,
  InfoExcursionStyled,
  TitleExcursionStyled,
  ExcursionCardContainer,
} from './excursion-card-styled';

interface ExcursionCardProps {
  excursion: Excursion;
}
const ExcursionCard: FC<ExcursionCardProps> = ({ excursion }) => {
  return (
    <ExcursionCardContainer>
      <TitleExcursionStyled>{excursion.nameExcursion}</TitleExcursionStyled>
      <ImageExcursionStyled>
        {
          <img
            src={excursion.imgExcursion}
            width={'350px'}
            alt={excursion.nameExcursion}
          ></img>
        }
      </ImageExcursionStyled>
      <InfoExcursionStyled>
        <p>Excursion: {excursion.nameExcursion}</p>
        <p>Level: {excursion.difficultyLevel}</p>
        {/* <p>{excursion.needEquipment}</p> */}
        <p>Organizer: {excursion.creator}</p>
      </InfoExcursionStyled>
      <ButtonExcursionStyled>Adventure</ButtonExcursionStyled>
    </ExcursionCardContainer>
  );
};

export default ExcursionCard;
