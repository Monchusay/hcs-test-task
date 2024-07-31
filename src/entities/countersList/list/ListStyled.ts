import styled from 'styled-components';

export const ListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const PaginationContainer = styled.div`
  padding: 8px 16px;
  border-top: 1px solid #eef0f4;
  display: flex;
`;
