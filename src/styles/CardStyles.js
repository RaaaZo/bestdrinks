import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  min-height: 450px;
  margin: 40px auto;

  ${({ detailedCard }) =>
    detailedCard &&
    css`
      height: 100%;
      max-width: 800px;
    `}

  ${({ profiledata }) =>
    profiledata &&
    css`
      margin: 20px 30px;
    `}
`;

export const CardInnerWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  cursor: pointer;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
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
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledCardButton = styled.button`
  padding: 6px 15px;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: bold;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 25px;
  transition: background-color 0.3s 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.accentsColor};
  }
`;

export const StyledDate = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  font-weight: bold;

  transition: transform 0.3s 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledError = styled.h3`
  text-align: center;
  margin: 10px 10px;
`;
