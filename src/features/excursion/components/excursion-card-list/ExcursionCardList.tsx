import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../app/hooks';
import { ExcursionCreate } from '../../../../pages/Card/CardPageStyled';
import { APIStatus } from '../../../../shared/models/api-status';
import { Excursion } from '../../../../shared/models/excursion-model';
import { selectExcursions } from '../../excursion-slice';
import ExcursionCard from '../excursion-card/ExcursionCard';
import {
  ExcursionCardListContainerMain,
  ExcursionCardListOne,
  ExcursionStatusFeedBackError,
  ExcursionStatusFeedBackLoading,
  TitleExcursionStyled,
} from './ExcursionCardListStyled';

export interface ExcursionCardListProps {
  excursions: Excursion[];
}

const ExcursionCardList: FC<ExcursionCardListProps> = ({ excursions }) => {
  const { status, excursionMessage } = useAppSelector(selectExcursions);

  switch (status) {
    case APIStatus.IDLE:
      return (
        <ExcursionCardListContainerMain>
          <TitleExcursionStyled>Excursions</TitleExcursionStyled>
          <Link to={'#'}>
            <ExcursionCreate>Create Excursion</ExcursionCreate>
          </Link>
          {excursions.map(excursion => (
            <ExcursionCardListOne key={excursion.nameExcursion}>
              <ExcursionCard excursion={excursion} />
            </ExcursionCardListOne>
          ))}
        </ExcursionCardListContainerMain>
      );
    case APIStatus.LOADING:
      return (
        <ExcursionStatusFeedBackLoading>
          {excursionMessage}
        </ExcursionStatusFeedBackLoading>
      );

    case APIStatus.ERROR:
      return (
        <ExcursionStatusFeedBackError role={'paragraph'}>
          There is not excursions to show
        </ExcursionStatusFeedBackError>
      );
  }
};

export default ExcursionCardList;
