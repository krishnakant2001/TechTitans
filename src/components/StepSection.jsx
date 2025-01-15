import {
  HowToRegOutlined,
  HubOutlined,
  Insights,
  ManageHistory,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 64px;
  padding: 64px 0;
  margin: auto;
`;
const Wrapper = styled.div`
  width: 248px;
  position: relative;
`;
const Count = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  color: #cff0ff;
  background-color: #9fddfa;
  padding: 8px;
  border-radius: 50%;
  font-size: 48px;
  font-style: italic;
  font-weight: 100;
`;
const Section = styled.div`
  height: 248px;
  width: 248px;
  border-radius: 50%;
  background-color: #9fddfa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Icon = styled.div``;
const Title = styled.div`
  font-size: 32px;
  font-weight: 300;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StepSection = () => {
  return (
    <Container>
      <Wrapper>
        <Count>01</Count>
        <Section>
          <Icon>
            <HowToRegOutlined fontSize="large" />
          </Icon>
          <Title>Sign up</Title>
          <Description>Create an Account</Description>
        </Section>
      </Wrapper>
      <Wrapper>
        <Count>02</Count>
        <Section>
          <Icon>
            <HubOutlined fontSize="large" />
          </Icon>
          <Title>Link Accounts</Title>
          <Description>
            Connect Social Media <span>Platforms</span>
          </Description>
        </Section>
      </Wrapper>
      <Wrapper>
        <Count>03</Count>
        <Section>
          <Icon>
            <ManageHistory fontSize="large" />
          </Icon>
          <Title>Track & Manage</Title>
          <Description>
            Access analytics and <span>schedule posts</span>
          </Description>
        </Section>
      </Wrapper>
      <Wrapper>
        <Count>04</Count>
        <Section>
          <Icon>
            <Insights fontSize="large" />
          </Icon>
          <Title>Grow</Title>
          <Description>
            Use insights to optimize <span>your performance</span>
          </Description>
        </Section>
      </Wrapper>
    </Container>
  );
};

export default StepSection;
