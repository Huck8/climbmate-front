import React from 'react';
import ExcursionCard from '../../features/user/components/excursion-card/ExcursionCard';

import { ExcursionCardStyled } from '../../features/user/components/excursion-card/ExcursionCardStyled';
import { CardListPageStyled } from './CardListPageStyled';

export const CardListPage = () => {
  return (
    <>
      <CardListPageStyled>
        Card List
        <ExcursionCard />
      </CardListPageStyled>
    </>
  );
};
