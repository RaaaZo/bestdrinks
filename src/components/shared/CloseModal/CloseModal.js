import styled, { css } from "styled-components";

export const CloseModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translateX(110%);
  transition: transform 1s ease-in-out;
  z-index: 10;

  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      transform: translateX(0);
    `};
`;
