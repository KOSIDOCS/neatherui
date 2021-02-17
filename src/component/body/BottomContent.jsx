import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";

import { BottomBtn } from "../shared/styledelement";

const BottomContent = () => {
  return (
    <Wrapper>
      <TextWrap>
        <TextMain>Idea submitted</TextMain>
        <SubText>10.10.10</SubText>
      </TextWrap>
      <BottomBtn>CO-INVEST IN THIS IDEA</BottomBtn>
      <PositionWrap>
        <Dot />
        <RightText>Live Trade</RightText>
      </PositionWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5em;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  position: relative;
  top: 14px;

  @media (max-width: 1024px) {
    top: 0;
    justify-content: center;
  }
`;
const TextMain = styled.span`
  color: ${theme.textMain};
  text-align: left;
  opacity: 1;
  margin-right: 8px;
`;

const SubText = styled.span`
  color: ${theme.textSmall};
  text-align: left;
  opacity: 1;
`;

const PositionWrap = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  margin-bottom: 0.2em;
  position: relative;
  top: 14px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Dot = styled.span`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: ${theme.longtext};
  position: relative;
  top: 1px;
  margin-right: 8px;
`;

const RightText = styled.span`
  color: ${theme.longtext};
  text-align: right;
  opacity: 1;
`;

export default BottomContent;
