import { type FC } from "react";
import { styled } from "styled-components";
import { listExperience } from "../../utilities/list";
import SectionHead from "../Shared/SectionHead";
import SectionWrapper from "../Shared/SectionWrapper";
import TimeLine from "../Shared/TimeLine";

const ExpTitle = styled.h3`
  font-family: ${({ theme }) => theme.fontPrimary};
  color: ${({ theme }) => theme.textContrast};
  margin-top: 1rem;
  span {
    font-weight: bold;
    display: block;
    font-size: ${({ theme }) => theme.fontSizeMd};
    text-transform: uppercase;
  }
  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s ease;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizeSm};
    &:hover {
      opacity: 1;
    }
  }
`;

const ExpDescription = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeMd};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  p {
    margin-bottom: 0.5rem;
    margin-top: 0.2rem;
  }
`;

const Experience: FC = () => {
  return (
    <SectionWrapper>
      <SectionHead title="Experience" />
      <TimeLine
        order="asc"
        items={listExperience.map((exp) => ({
          startDate: exp.startDate,
          endDate: exp.endDate,
          title: (
            <ExpTitle>
              <span>{exp.position}</span>
              <a href={exp.website} target="_blank" rel="noopener noreferrer">
                {exp.company}{" "}
                <i
                  className="pi pi-external-link"
                  style={{ marginLeft: "0.3rem", fontSize: "0.8rem" }}
                />
              </a>
            </ExpTitle>
          ),
          description: (
            <ExpDescription>
              {exp.description.map((desc, descIndex) => (
                <p key={descIndex}>{desc}</p>
              ))}
            </ExpDescription>
          ),
        }))}
      />
    </SectionWrapper>
  );
};

export default Experience;
