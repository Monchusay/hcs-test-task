import React, { FC } from 'react';
import { useStore } from '../../../app/RootStore';
import * as SC from './ListStyled';
import CounterItem from './counterItem/CounterItem';
import Pagination from '../../../widgets/pagination/Pagination';
import { observer } from 'mobx-react-lite';
import Preloader from '../../../widgets/preloader/Preloader';

const List: FC = observer(() => {
  const rootStore = useStore();

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    rootStore.fetchCounters(20, (page - 1) * 20);
  };

  const handleCounterDelete = (id: string) => {
    rootStore.deleteCounter(id).then(() => {
      rootStore.fetchCounters(20, (currentPage - 1) * 20);
    });
  };

  if (rootStore.state === 'pending') {
    return <Preloader />;
  }

  if (rootStore.state === 'error') {
    return <>Ошибка загрузки</>;
  }
  return (
    <>
      <SC.ListContainer>
        {rootStore.counters.map((counter, index) => {
          const counterAddress = rootStore.addresses.get(counter.area.id);
          return (
            <CounterItem
              counter={counter}
              key={counter.id}
              deleteCounter={() => handleCounterDelete(counter.id)}
              number={(currentPage - 1) * 20 + index + 1}
              addressLine={`${counterAddress?.house.address} ${counterAddress?.str_number_full}`}
            />
          );
        })}
      </SC.ListContainer>
      <SC.PaginationContainer>
        <Pagination
          pages={Math.ceil(rootStore.countersCount / 20)}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
        />
      </SC.PaginationContainer>
    </>
  );
});

export default List;
