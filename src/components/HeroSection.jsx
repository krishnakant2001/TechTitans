import React from "react";
import styled from "styled-components";
import socialMediaImg from "../assets/socialMediaNtw.jpg"

// Styled Components
const HeroSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 28px;
  background-image: linear-gradient(40deg, #bdeaff 20%, #f0bbff);
`;

const Tagline = styled.span`
    font-size: 24px;
`;

const HeroHeadline = styled.h1`
  font-size: 48px;
`;

const HeroSubheadline = styled.p`
  font-size: 18px;
`;

const CTAButton = styled.button`
  background: #ffffff9f;
  color: #3c1414;
  font-size: 14px;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #f0f0f0;
  }
`;

const HeroImage = styled.img`
  width: 360px;
  height: 360px;
  border-radius: 50%;
  object-fit: cover;
`;



export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <Tagline>Your one-stop solution for social media management</Tagline>
      <HeroHeadline>Manage All Your Social Media in One Place!</HeroHeadline>
      <HeroSubheadline>
        Track analytics, schedule posts, and optimize your social media
        performance with ease.
      </HeroSubheadline>
      <CTAButton>Get Started for Free</CTAButton>
      <HeroImage src={socialMediaImg} alt="Social Media Dashboard Mockup" />
    </HeroSectionWrapper>
  );
}
