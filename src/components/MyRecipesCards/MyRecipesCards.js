import React, { Fragment } from "react";

import bartender from "assets/svg/bartender.svg";

import {
  CardWrapper,
  StyledSvg,
  StyledDescription,
  DetailsData,
  StyledDate,
  StyledCardButton,
} from "styles/CardStyles";
import usePushHistory from "hooks/usePushHistory";

const DUMMY_DATA = [
  {
    id: 1,
    img: bartender,
    shortDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae, quisquam in aliquam neque ipsam vitae quod repudiandae, possimus sint repellendus!",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sequi dolor. Impedit sapiente eos, recusandae laudantium ducimus labore iusto doloremque laboriosam sed repellendus id similique illum aliquid odio! In perspiciatis minima facere dicta dolore veniam maxime perferendis distinctio itaque quas dolor commodi a, rerum nobis iure? Impedit nam ipsa ab, dolore possimus sed est veniam voluptas recusandae maiores, odio repellendus?",
    recipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum, doloremque amet non ea dolorum! Velit accusantium quas rerum hic.",
    user: "Mateusz",
    date: "13.08.2020",
    favourite: true,
  },
  {
    id: 2,
    img: bartender,
    shortDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae, quisquam in aliquam neque ipsam vitae quod repudiandae, possimus sint repellendus!",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sequi dolor. Impedit sapiente eos, recusandae laudantium ducimus labore iusto doloremque laboriosam sed repellendus id similique illum aliquid odio! In perspiciatis minima facere dicta dolore veniam maxime perferendis distinctio itaque quas dolor commodi a, rerum nobis iure? Impedit nam ipsa ab, dolore possimus sed est veniam voluptas recusandae maiores, odio repellendus?",
    recipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum, doloremque amet non ea dolorum! Velit accusantium quas rerum hic.",
    user: "Mateusz",
    date: "13.08.2020",
    favourite: false,
  },
  {
    id: 3,
    img: bartender,
    shortDesc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nulla animi, odit eveniet dolorum asperiores unde eos voluptate molestiae, quisquam in aliquam neque ipsam vitae quod repudiandae, possimus sint repellendus!",
    longDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sequi dolor. Impedit sapiente eos, recusandae laudantium ducimus labore iusto doloremque laboriosam sed repellendus id similique illum aliquid odio! In perspiciatis minima facere dicta dolore veniam maxime perferendis distinctio itaque quas dolor commodi a, rerum nobis iure? Impedit nam ipsa ab, dolore possimus sed est veniam voluptas recusandae maiores, odio repellendus?",
    recipe:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum, doloremque amet non ea dolorum! Velit accusantium quas rerum hic.",
    user: "Mateusz",
    date: "13.08.2020",
    favourite: false,
  },
];

const MyRecipesCards = () => {
  const pushToDetailedCard = usePushHistory();

  return (
    <>
      {DUMMY_DATA.map((item) => (
        <Fragment key={item.id}>
          <CardWrapper onClick={() => pushToDetailedCard(`/drink/${item.id}`)}>
            <StyledSvg src={item.img} alt="zdjęcie drinka" />
            <StyledDescription>{item.shortDesc}</StyledDescription>
            <DetailsData>
              <StyledCardButton>Edytuj</StyledCardButton>
              <StyledDate>{item.date}</StyledDate>
            </DetailsData>
          </CardWrapper>
        </Fragment>
      ))}
    </>
  );
};

export default MyRecipesCards;
