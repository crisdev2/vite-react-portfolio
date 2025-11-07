import { type FC, type ReactNode } from "react";
import styled from "styled-components";

type SectionWrapperProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const SectionWrapper: FC<SectionWrapperProps> = ({ children, ...props }) => {
  return <Section {...props}>{children}</Section>;
};

export default SectionWrapper;
