import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ExcursionCardList from '../../features/excursion/components/excursion-card-list/ExcursionCardList';
import {
  getAllExcursionsAsync,
  selectExcursions,
} from '../../features/excursion/excursion-slice';
import {
  ExcursionCardPageStyled,
  ExcursionHeroImageStyled,
} from './CardPageStyled';

export const ExcursionCardPage = () => {
  const dispatch = useAppDispatch();
  const excursionState = useAppSelector(selectExcursions);
  useEffect(() => {
    dispatch(getAllExcursionsAsync());
  }, [dispatch]);
  return (
    <ExcursionCardPageStyled>
      <ExcursionHeroImageStyled className="hero"></ExcursionHeroImageStyled>
      <ExcursionCardList
        excursions={excursionState.excursions}
      ></ExcursionCardList>
    </ExcursionCardPageStyled>
  );
};

export default ExcursionCardPage;
