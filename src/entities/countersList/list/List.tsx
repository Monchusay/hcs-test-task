import React, { FC } from 'react';
import { useStore } from '../../../app/RootStore';
import * as SC from './ListStyled';
import mockData from '../../../app/mock.json';
import CounterItem from './counterItem/CounterItem';
import Pagination from '../../../widgets/pagination/Pagination';

const List: FC = () => {
  const rootStore = useStore();

  const [currentPage, setCurrentPage] = React.useState(1);

  const count = 1200;

  const handleCounterDelete = (id: string) => {
    rootStore.deleteCounter(id, 20, currentPage * 20);
  };

  return (
    <>
      <SC.ListContainer>
        {mockData.map((counter) => (
          // @ts-ignore
          <CounterItem counter={counter}
            key={counter.id}
            deleteCounter={() => handleCounterDelete(counter.id)}
          />
        ))}
      </SC.ListContainer>
      <SC.PaginationContainer>
        <Pagination
          pages={count / 20}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </SC.PaginationContainer>
    </>
  );
};

export default List;
