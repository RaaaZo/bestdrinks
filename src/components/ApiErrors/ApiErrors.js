import styled from "styled-components";

export const ApiError = styled.p`
  margin: 5px;
  font-weight: bold;
  color: red;
  text-align: center;
`;

export const ApiPageError = styled.div`
  width: 90%;
  height: 40%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;

  @media (min-width: 660px) {
    width: 70%;
  }
`;

export const ApiPageErrorMessage = styled.h3`
  color: white;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};

  @media (min-width: 660px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl};
  }
`;
