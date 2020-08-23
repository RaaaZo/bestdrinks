import React from "react";

import { ReactComponent as BlobBottom } from "assets/svg/blobBottom.svg";
import { ReactComponent as BlobTop } from "assets/svg/blobTop.svg";
import { ReactComponent as BlobBottomRight } from "assets/svg/blobBottomRight.svg";
import styled from "styled-components";

export const BottomLeftBlob = styled(BlobBottom)`
  display: none;
  width: 500px;
  height: 400px;
  position: fixed;
  left: -10%;
  bottom: -5%;
  z-index: -1;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const TopRightBlob = styled(BlobTop)`
  display: none;
  width: 500px;
  height: 400px;
  position: fixed;
  right: -10%;
  top: 12%;
  z-index: -1;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const BottomRightBlob = styled(BlobBottomRight)`
  display: none;
  width: 600px;
  height: 400px;
  position: fixed;
  right: -14%;
  bottom: -10%;
  z-index: -1;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Blobs = () => {
  return (
    <>
      <BottomLeftBlob />
      <TopRightBlob />
      <BottomRightBlob />
    </>
  );
};

export default Blobs;
