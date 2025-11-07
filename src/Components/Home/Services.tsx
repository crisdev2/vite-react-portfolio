import { type FC } from "react";
import styled from "styled-components";
import ServicesImage from "../../assets/services.jpg";
import SectionHead from "../Shared/SectionHead";
import SectionWrapper from "../Shared/SectionWrapper";

const ListServices = [
  { title: "Web Development", icon: "pi pi-globe" },
  { title: "Mobile App Development", icon: "pi pi-mobile" },
  { title: "SEO Optimization", icon: "pi pi-chart-line" },
  { title: "Cost Optimization", icon: "pi pi-wallet" },
  { title: "Technical Consulting", icon: "pi pi-comments" },
  { title: "Troubleshooting & Support", icon: "pi pi-cog" },
];

const StyledServiceList = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  gap: 0;
  box-sizing: border-box;
  cursor: default;
  .service-item {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.textPrimary};
    padding: 10px;
    margin: 5px;
    font-weight: bold;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizeMd};
    i {
      font-size: 2rem;
      text-align: center;
    }
    ${({ theme }) => theme.mediaMobile} {
      font-size: ${({ theme }) => theme.fontSizeSm};
      font-weight: normal;
      i {
        font-size: 1.5rem;
      }
    }
    --border-angle: 0turn;
    --main-bg: conic-gradient(
      from var(--border-angle),
      rgba(34, 17, 51, 0.4),
      rgba(17, 17, 34, 0.4) 5%,
      rgba(17, 17, 34, 0.4) 60%,
      rgba(34, 17, 51, 0.4) 95%
    );
    border: solid 2px transparent;
    border-radius: 10px;
    --gradient-border: conic-gradient(
      from var(--border-angle),
      transparent 25%,
      rgba(0, 119, 255, 0.7),
      rgba(255, 0, 51, 0.4) 99%,
      transparent
    );
    background: rgba(17, 17, 34, 0.7);
    &:hover {
      background: var(--main-bg) padding-box, var(--gradient-border) border-box,
        var(--main-bg) border-box;
    }

    background-position: center center;
    animation: bg-spin 5s linear infinite;
    @keyframes bg-spin {
      to {
        --border-angle: 1turn;
      }
    }
    @property --border-angle {
      syntax: "<angle>";
      inherits: true;
      initial-value: 0turn;
    }
  }
`;

const ServicesBackground = styled.div`
  background-color: ${({ theme }) => theme.servicesBackground};
  background-image: url(${ServicesImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 280px;
  margin-top: 1.5rem;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Services: FC = () => {
  return (
    <SectionWrapper id="services">
      <SectionHead title="Services" />
      <ServicesBackground>
        <StyledServiceList>
          {ListServices.map((service, index) => (
            <div key={index} className="service-item">
              {service.title}
              <i className={service.icon}></i>
            </div>
          ))}
        </StyledServiceList>
      </ServicesBackground>
    </SectionWrapper>
  );
};

export default Services;
