import { type FC } from "react";
import styled from "styled-components";
import About from "../Home/About";
import Contact from "../Home/Contact";
import Education from "../Home/Education";
import Experience from "../Home/Experience";
import Projects from "../Home/Projects";
import Services from "../Home/Services";
import Technologies from "../Home/Technologies";

const ContentWrapper = styled.main`
  max-width: ${({ theme }) => theme.contentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.basePadding};
`;

const Content: FC = () => {
  return (
    <ContentWrapper>
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Education />
      <Services />
      <Contact />
    </ContentWrapper>
  );
};

export default Content;
