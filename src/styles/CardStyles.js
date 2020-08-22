import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border: 2px solid ${({ theme }) => theme.accentsColor};
  cursor: pointer;

  ${({ detailedCard }) =>
    detailedCard &&
    css`
      height: 100%;
      max-width: 800px;
    `}
`;

export const StyledSvg = styled.img`
  width: 100%;
  max-height: 200px;
  margin: 0 auto;
  border-bottom: 2px solid ${({ theme }) => theme.accentsColor};
`;

export const StyledDescription = styled.p`
  width: 90%;
  margin: 20px 0;
  text-align: justify;
  text-align-last: center;
`;

export const DetailsData = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
`;