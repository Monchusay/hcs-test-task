import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const PreloaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
