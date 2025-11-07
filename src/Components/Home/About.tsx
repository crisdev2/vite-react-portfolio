import { type FC } from "react";
import styled from "styled-components";
import Photo from "../../assets/Photo.webp";

const WhoIAm = styled.h1`
  font-size: ${({ theme }) => theme.fontSizeXl};
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 0;
`;

const MyName = styled.span`
  color: ${({ theme }) => theme.textContrast};
`;

const MyExperience = styled.span`
  color: ${({ theme }) => theme.accent};
  font-weight: bold;
`;

const Role = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeMd};
  font-family: ${({ theme }) => theme.fontSecondary};
  margin: 0;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.accent} 20%,
    ${({ theme }) => theme.textPrimary} 40%,
    ${({ theme }) => theme.accent} 60%,
    ${({ theme }) => theme.textPrimary} 80%
  );
  color: ${({ theme }) => theme.accent};
  position: relative;
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 5s linear infinite;
`;

const AboutMe = styled.p`
  font-size: ${({ theme }) => theme.fontSizeMd};
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.textPrimary};
  line-height: 1.6;
`;

const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 2rem 0;
  margin-top: 8rem;
  ${({ theme }) => theme.mediaMobile} {
    flex-direction: column-reverse;
    text-align: center;
    padding: 3rem 0 2rem 0;
    gap: 2rem;
    margin-top: 0rem;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  margin-right: 2rem;
`;

const RightSide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }
`;

const About: FC = () => {
  return (
    <AboutContainer id="about">
      <LeftSide>
        <WhoIAm>
          Hi there, <MyName>I'm Cristian Anzola</MyName>
        </WhoIAm>
        <Role className="shiny-text">Fullstack Developer</Role>
        <AboutMe>
          Passionate about developing secure, optimal, user-friendly, and
          scalable platforms that make this world a better place for everyone,
          with over <MyExperience>+10 years of experience</MyExperience>{" "}
          building innovative solutions across a wide range of technologies and
          frameworks.
        </AboutMe>
      </LeftSide>
      <RightSide>
        <img src={Photo} alt="Cristian's Photo" width={150} />
      </RightSide>
    </AboutContainer>
  );
};

export default About;
