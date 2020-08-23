import styled from "styled-components";
import { ReactComponent as RegisterSvg } from "assets/svg/registerSvg.svg";

export const PageFormikWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 120px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.secondaryColor};
  border: 2px solid ${({ theme }) => theme.accentsColor};
  border-radius: 15px;

  @media (orientation: landscape) {
    width: 50%;
    height: 90%;
  }

  @media (min-width: 768px) {
    width: 60%;
    height: 60%;
  }

  @media (min-width: 1024px) {
    width: 60%;
    height: 70%;
  }

  @media (min-width: 1440px) {
    width: 40%;
    height: 60%;
  }
`;

export const StyledSvg = styled(RegisterSvg)`
  width: 100%;
  height: 300px;
  margin: 30px auto;

  @media (min-width: 1024px) {
    height: 400px;
  }
`;
