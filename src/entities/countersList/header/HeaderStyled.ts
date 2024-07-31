import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48px 120px 160px 128px 146px 1fr 1fr;
  background-color: #f0f3f7;
`;
export const CellTitle = styled.h4<{ $center: boolean }>`
  text-align: ${({ $center }) => $center && 'center'};
  padding: 8px 12px;
  color: #697180;
  cursor: default;
  margin: 0;
  font: 13px/16px Roboto;
  font-weight: 500;
`;
