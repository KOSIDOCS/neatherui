import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";
import { darken } from "polished";

const SummaryContent = () => {
  return (
    <Wrapper>
      <Heading>EXECUTIVE SUMMARY</Heading>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut
      pharetra sit amet. Arcu odio ut sem nulla pharetra diam sit amet nisl.
      Adipiscing elit ut aliquam purus sit amet luctus. Faucibus purus in massa
      tempor nec feugiat. Nibh tellus molestie nunc non blandit massa enim nec
      dui. Consectetur adipiscing elit pellentesque habitant morbi tristique
      senectus. Mollis nunc sed id semper risus in. Consectetur adipiscing elit
      pellentesque habitant morbi tristique senectus. Mollis nunc sed id semper
      risus in.
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${theme.lightGrey};
  background: ${theme.lightGrey};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3em 1.8em 1.3em 2.4em;
  color: ${darken(0.1, theme.lightGreen)};
  line-height: 2;
`;

const Heading = styled.h1`
  color: ${theme.mainBlue};
  margin-bottom: 0.3rem;
  text-align: left;
  width: 11em;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 1.5;
`;

export default SummaryContent;
