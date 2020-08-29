import { ReactComponent as BackArrow } from "assets/svg/left-arrow.svg";
import styled from "styled-components";

export const StyledBackArrow = styled(BackArrow)`
  position: fixed;
  bottom: 6%;
  left: 3%;
  width: 60px;
  height: 50px;
  border: 2px solid black;
  padding: 5px 5px;
  cursor: pointer;
  transition: background-color 0.3s 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }

  @media (min-width: 1360px) {
    top: 15%;
    left: 4%;
  }

  @media (min-width: 1500px) {
    left: 10%;
  }

  @media (min-width: 1650px) {
    left: 15%;
  }

  @media (min-width: 1900px) {
    left: 20%;
  }
`;
