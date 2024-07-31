import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  margin-left: auto;
  gap: 8px;
`;
export const PageButton = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  padding: 8px 0;
  width: 32px;
  cursor: pointer;
  font: 14px/20px Roboto;
  background-color: ${({ $isActive }) => $isActive && '#CED5DE'};
  font-weight: 400;
  color: #1f2939;
  border: 1px solid #ced5de;
  border-radius: 6px;
  &:hover {
    background-color: ${({ $isActive }) => !$isActive && '#f7f8f9'};
  }
`;
