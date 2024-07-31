import styled from 'styled-components';

export const DeleteButtonContainer = styled.div`
  display: none;
  position: absolute;
  right: 12px;
`;
export const CounterContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 48px 120px 160px 128px 146px 1fr 1fr;
  cursor: pointer;
  border-bottom: 1px solid #e0e5eb;
  &:hover {
    background-color: #f7f8f9;
  }
  &:hover ${DeleteButtonContainer} {
    display: initial;
  }
`;
export const CounterCell = styled.div<{ $center?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: ${({ $center }) => $center && 'center'};
  gap: 8px;
  padding: 16px 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CounterText = styled.span`
  font: 14px/20px Roboto;
  font-weight: 400;
  color: #1f2939;
`;
