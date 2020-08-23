import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  width: 95%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-flow: row wrap;
  }

  ${({ profiledata }) =>
    profiledata &&
    css`
      @media (min-width: 768px) {
        justify-content: center;
      }
    `}
`;
