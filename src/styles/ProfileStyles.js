const { default: styled } = require("styled-components");

export const DataAndFavouritesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledPageHeader = styled.h3`
  width: 100%;
  padding: 20px;
  margin: 15px auto;
  color: black;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xl};
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  text-align: center;

  @media (min-width: 660px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const DataWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};

  @media (min-width: 660px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin: 10px auto;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.accentsColor};
  font-weight: bold;
`;

export const PageHeaderWrapper = styled.div`
  width: 100%;
`;
