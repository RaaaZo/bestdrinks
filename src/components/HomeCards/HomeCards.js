import React, { Fragment } from "react";
import PropTypes from "prop-types";

import bartender from "assets/svg/bartender.svg";
import { useHistory } from "react-router-dom";
import {
  CardWrapper,
  StyledSvg,
  StyledDescription,
  DetailsData
} from "styles/CardStyles";

const DUMMY_DATA = [
  {
    id: 1,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae, quisquam in aliquam neque ipsam vitae quod repudiandae, possimus sint repellendus!",
    user: "Mateusz",
    date: "13.08.2020"
  },
  {
    id: 2,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde!",
    user: "Mateusz",
    date: "13.08.2020"
  },
  {
    id: 3,
    img: bartender,
    desc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae",
    user: "Mateusz",
    date: "13.08.2020"
  }
];

const Card = () => {
  const history = useHistory();

  const routeToDetailsPage = drinkId => {
    history.push(`/drink/${drinkId}`);
  };

  return (
    <>
      {DUMMY_DATA.map(item => (
        <Fragment key={item.id}>
          <CardWrapper onClick={() => routeToDetailsPage(item.id)}>
            <StyledSvg src={item.img} alt="zdjęcie drinka" />
            <StyledDescription>{item.desc}</StyledDescription>
            <DetailsData>
              <p>{item.user}</p>
              <p>{item.date}</p>
            </DetailsData>
          </CardWrapper>
        </Fragment>
      ))}
    </>
  );
};

Card.propTypes = {};

export default Card;
