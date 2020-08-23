import styled from "styled-components";
import addDrink from "assets/svg/addDrink.svg";

export const AddBtn = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.accentsColor};
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  background-image: url(${addDrink});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  cursor: pointer;
`;
