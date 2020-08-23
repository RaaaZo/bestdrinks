import React, { Fragment } from "react";

import bartender from "assets/svg/bartender.svg";
import {
  CardWrapper,
  StyledSvg,
  StyledDescription,
  DetailsData,
  StyledCardButton,
  StyledDate,
} from "styles/CardStyles";
import usePushHistory from "hooks/usePushHistory";

const DUMMY_DATA = [
  {
    id: 1,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae, quisquam in aliquam neque ipsam vitae quod repudiandae, possimus sint repellendus!",
    user: "Mateusz",
    date: "13.08.2020",
  },
  {
    id: 2,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde!",
    user: "Mateusz",
    date: "13.08.2020",
  },
  {
    id: 3,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae",
    user: "Mateusz",
    date: "13.08.2020",
  },
];

const Card = () => {
  const pushToDetailedCard = usePushHistory();

  return (
    <>
      {DUMMY_DATA.map((item) => (
        <Fragment key={item.id}>
          <CardWrapper onClick={() => pushToDetailedCard(`/drink/${item.id}`)}>
            <StyledSvg src={item.img} alt="zdjęcie drinka" />
            <StyledDescription>{item.desc}</StyledDescription>
            <DetailsData>
              <StyledCardButton>{item.user}</StyledCardButton>
              <StyledDate>{item.date}</StyledDate>
            </DetailsData>
          </CardWrapper>
        </Fragment>
      ))}
    </>
  );
};

export default Card;
