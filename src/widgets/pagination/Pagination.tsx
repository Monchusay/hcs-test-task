import React, { FC } from 'react';
import * as SC from './PaginationStyled';
import { getPagination } from '../../shared/helpers/getPagination';

type PaginationPropsType = {
  pages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};
const Pagination: FC<PaginationPropsType> = (props) => {
  const { pages, currentPage, setCurrentPage } = props;

  const pagination = React.useMemo(
    () => getPagination(pages, currentPage),
    [currentPage, pages]
  );

  return (
    <SC.PaginationContainer>
      {pagination.map((page, index) => {
        const isPage = typeof page === 'number';
        return (
          <SC.PageButton
            key={index}
            $isActive={isPage && page === currentPage}
            onClick={() => isPage && setCurrentPage(page)}
          >
            {page}
          </SC.PageButton>
        );
      })}
    </SC.PaginationContainer>
  );
};

export default Pagination;
