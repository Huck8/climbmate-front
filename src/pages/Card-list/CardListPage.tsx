import React from 'react';
import ExcursionCard from '../../features/user/components/excursion-card/ExcursionCard';

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
