import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";
import { darken } from "polished";
import device from "../shared/mediaquery";

import { BoxWrapper, Btn } from "../shared/styledelement";
import { Check, ArrowRight } from "react-feather";

const BigBox = () => {
  return (
    <BoxWrapper color>
      <Heading>Submit your stock idea in three simple steps</Heading>
      <Wrap>
        <ListWrap>
          <ListItem>
            <ListItemIcon>
              <Check size="20" color={theme.mainBlue} className="icon" />
            </ListItemIcon>
            <ListItemText>Select your stock</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check size="20" color={theme.mainBlue} className="icon" />
            </ListItemIcon>
            <ListItemText>Write your analysis</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Check size="20" color={theme.mainBlue} className="icon" />
            </ListItemIcon>
            <ListItemText>Allocate virtual dollars to your idea</ListItemText>
          </ListItem>
        </ListWrap>
        <Btn>
          Submit a stock idea{" "}
          <ArrowRight
            size="30"
            color={darken(0.1, theme.lightGreen)}
            className="rectangle"
          />
        </Btn>
      </Wrap>
    </BoxWrapper>
  );
};

const Heading = styled.h1`
  color: ${theme.textMain};
  margin-left: 1.7rem;
  margin-bottom: 0.3rem;
  text-align: left;
  width: 11em;
  font-weight: 500;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 1.8rem;
  margin-top: 1.4em;

  @media ${device.exactScreen} {
    flex-direction: column;
  }
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 0.5rem;
`;

const ListItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.5rem;
  margin-bottom: 0.4em;

  & :last-of-type {
    margin-bottom: 0;
  }
`;

const ListItemIcon = styled.span`
  margin-right: 0.325rem;
  font-size: 20px;
  background: rgba(89, 112, 185, 0.5);
  border-radius: 50%;
  padding: 4px;
  height: 30px;
  width: 30px;

  & .icon {
    position: relative;
    top: 1px;
    left: 1px;
  }
`;

const ListItemText = styled.div`
  color: ${theme.listText};
  font-size: 1.3em;
  letter-spacing: 0;
  margin-left: 0.3em;
`;

export default BigBox;
