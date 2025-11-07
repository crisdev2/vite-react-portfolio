import { type FC } from "react";
import styled from "styled-components";
import Institution3 from "../../assets/education/aws.jpeg";
import Institution2 from "../../assets/education/cesa.jpeg";
import Institution1 from "../../assets/education/ecci.jpeg";
import SectionHead from "../Shared/SectionHead";
import SectionWrapper from "../Shared/SectionWrapper";

const ListInstitutions = [
  {
    degree: "Technologist in Software Development",
    institution: "Universidad ECCI",
    website: "https://www.ecci.edu.co",
    period: "2014 - 2019",
    logo: Institution1,
  },
  {
    degree: "Certificate in Digital Transformation",
    institution: "CESA",
    website: "https://www.cesa.edu.co",
    period: "jan. 2020",
    logo: Institution2,
  },
  {
    degree: "Architecting on AWS",
    institution: "AWS Training Online",
    website: "https://www.aws.training",
    period: "jul. 2020",
    logo: Institution3,
  },
];

const StyledInstitutions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  .institution-item {
    display: flex;
    align-items: start;
    gap: 1.5rem;
  }
  .institution-title {
    font-family: ${({ theme }) => theme.fontPrimary};
    color: ${({ theme }) => theme.textPrimary};
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizeMd};
    text-transform: uppercase;
    color: ${({ theme }) => theme.textContrast};
    margin-bottom: 4px;
  }
  .institution-website {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.2s ease;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizeSm};
    margin-bottom: 10px;
    display: inline-block;
    &:hover {
      opacity: 1;
    }
  }
  .institution-dates {
    display: block;
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const Education: FC = () => {
  return (
    <SectionWrapper>
      <SectionHead title="Education" />
      <StyledInstitutions>
        {ListInstitutions.map((item, index) => (
          <div key={index} className="institution-item">
            <img src={item.logo} alt={item.institution} width={80} />
            <div className="institution-info">
              <h4 className="institution-title">{item.degree}</h4>
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                className="institution-website"
              >
                {item.institution}
                <i
                  className="pi pi-external-link"
                  style={{ marginLeft: "0.3rem", fontSize: "0.8rem" }}
                />
              </a>
              <span className="institution-dates">{item.period}</span>
            </div>
          </div>
        ))}
      </StyledInstitutions>
    </SectionWrapper>
  );
};

export default Education;
