import React from "react";
import styled from "styled-components";
import theme from "../shared/theme";

const MiddleContent = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <Heading>ATTACHEMENTS</Heading>
        <SubHead>Not specified</SubHead>
      </ItemWrapper>
      <ItemWrapper>
        <Heading>TIME FRAME</Heading>
        <SubHead>6 months to 1 year</SubHead>
      </ItemWrapper>
      <ItemWrapper>
        <Heading>CONVICTION LEVEL</Heading>
        <SubHead color>HIGH</SubHead>
      </ItemWrapper>
      <ItemWrapper>
        <Heading>CATALYST</Heading>
        <SubHead>Not specified</SubHead>
      </ItemWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
  margin: 2.8em 8em;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.span`
  color: ${theme.mainBlue};
  text-align: center;
  opacity: 1;
  font-size: 1em;
  letter-spacing: 0;
`;

const SubHead = styled.span`
  color: ${(prop) => (prop.color ? theme.longtext : theme.listText)};
  text-align: center;
  opacity: ${(prop) => (prop.color ? null : 0.5)};
  background: ${(prop) => (prop.color ? theme.long : null)};
  border-radius: ${(prop) => (prop.color ? "1.3em" : null)};
  padding: 0.2em 0.3em;
  font-size: 1em;
  letter-spacing: 0;
  font-weight: 500;
  margin-top: ${(prop) => (prop.color ? "0.3em" : null)};

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export default MiddleContent;
