import React, { FC } from 'react';
import * as SC from './CountersListPageStyled';
import Header from '../../entities/countersList/header/Header';
import List from '../../entities/countersList/list/List';
const CountersListPage: FC = () => {
  return (
    <SC.ListContainer>
      <Header />
      <List />
    </SC.ListContainer>
  );
};

export default CountersListPage;
