import React from "react";

const useCardsData = () => {
  //SPROBOWAC TUTAJ ZROBIC HOOKA DO POBIERANIA DANYCH

  return (
    <>
      {DUMMY_DATA.map((item) => (
        <Fragment key={item.id}>
          <CardWrapper onClick={() => pushToDetailedCard(item.id)}>
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

export default useCardsData;
