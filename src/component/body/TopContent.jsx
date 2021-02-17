import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";
import { ArrowUp } from "react-feather";

import { LeftBtn, RightBtn } from "../shared/styledelement";

const TopContent = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <LeftHeading>DELTA PLUS GROUP</LeftHeading>
        <LeftSubHead>DLTA PA</LeftSubHead>
        <BtnWrap>
          <LeftBtn>AUSTRALIA</LeftBtn>
          <LeftBtn>MATERIALS</LeftBtn>
        </BtnWrap>
        <ListWrapper>
          <ListItem>
            <ListItemText>Current Price</ListItemText>
            <ListItemNumber>13.98M</ListItemNumber>
          </ListItem>
          <ListItem>
            <ListItemText>Total Price</ListItemText>
            <ListItemNumber>13.98M</ListItemNumber>
          </ListItem>
          <ListItem>
            <ListItemText>Market Cap</ListItemText>
            <ListItemNumber>10.75M</ListItemNumber>
          </ListItem>
        </ListWrapper>
      </LeftWrapper>
      <RightWrapper>
        <RightBtn>
          <ArrowUp size="30" color={theme.longtext} className="arrowup" />
          LONG POSITION
        </RightBtn>
        <PositionWrapper>
          <PositionWrap>
            <Dot />
            <Text>Expected Returns</Text>
          </PositionWrap>
          <TextNum>20.84%</TextNum>
        </PositionWrapper>
        <PositionWrapper>
          <PositionWrap>
            <Dot />
            <Text>Inception Price</Text>
          </PositionWrap>
          <TextNum>$1.20</TextNum>
        </PositionWrapper>
        <PositionWrapper>
          <PositionWrap>
            <Dot />
            <Text>Target Price</Text>
          </PositionWrap>
          <TextNum>$1.20</TextNum>
        </PositionWrapper>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${theme.textSmall};
  background: ${theme.light};
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.3em;
  flex-wrap: wrap;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1024px) {
    width: 300px;
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftHeading = styled.h2`
  color: ${theme.textMain};
  margin-bottom: 0.3rem;
  text-align: left;
  width: 11em;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

const LeftSubHead = styled.h4`
  color: ${theme.listText};
  margin-bottom: 1rem;
  text-align: left;
  width: 4em;
  font-weight: 300;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-top: 1.3em;
`;

const ListItem = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  margin-bottom: 0.9em;
  position: relative;

  & :last-of-type {
    margin-bottom: 0;
  }
`;

const ListItemNumber = styled.span`
  color: ${theme.listText};
  font-size: 1em;
  letter-spacing: 0;
  position: absolute;
  left: 14em;
`;

const ListItemText = styled.div`
  color: ${theme.listText};
  font-size: 1em;
  letter-spacing: 0;
  opacity: 0.5;
`;

const RightWrapper = styled(LeftWrapper)``;

const PositionWrap = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  margin-bottom: 0.2em;
  position: relative;
`;

const PositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  margin-bottom: 0.7em;
`;

const Dot = styled.span`
  height: 13px;
  width: 13px;
  border-radius: 50%;
  background: ${theme.mainBlue};
  position: relative;
  top: 4px;
  margin-right: 8px;
`;

const Text = styled(ListItemText)`
  color: ${theme.mainBlue};
  text-align: right;
  opacity: 1;
`;

const TextNum = styled(ListItemText)`
  color: ${theme.listText};
  text-align: right;
  opacity: 1;
`;

export default TopContent;
