import React from "react";

import styled from "styled-components";
import theme from "../shared/theme";
import { darken } from "polished";

import { BoxWrapper, SecondBtn } from "../shared/styledelement";
import { ArrowRight } from "react-feather";

const SmallBox = () => {
  return (
    <BoxWrapper>
      <Heading>Need some Inspirations of Stock ideas?</Heading>
      <SecondBtn>
        Watch our Guidelines
        <ArrowRight
          size="30"
          color={darken(0.1, theme.lightGreen)}
          className="rectangle"
        />
      </SecondBtn>
    </BoxWrapper>
  );
};

const Heading = styled.h1`
  color: ${theme.textMain};
  margin-left: 0.9rem;
  margin-bottom: 0.3rem;
  text-align: left;
  width: 8em;
  font-weight: 500;
`;

export default SmallBox;
