import { type FC } from "react";
import styled from "styled-components";
import AngularLogo from "../../assets/technologies/angular.svg";
import ApacheLogo from "../../assets/technologies/apache.svg";
import AwsLogo from "../../assets/technologies/aws.svg";
import CssLogo from "../../assets/technologies/css.svg";
import DockerLogo from "../../assets/technologies/docker.svg";
import DrupalLogo from "../../assets/technologies/drupal.svg";
import GcpLogo from "../../assets/technologies/gcp.svg";
import HtmlLogo from "../../assets/technologies/html.svg";
import JavascriptLogo from "../../assets/technologies/javascript.svg";
import JoomlaLogo from "../../assets/technologies/joomla.svg";
import LaravelLogo from "../../assets/technologies/laravel.svg";
import LinuxLogo from "../../assets/technologies/linux.svg";
import MysqlLogo from "../../assets/technologies/mysql.svg";
import NginxLogo from "../../assets/technologies/nginx.svg";
import NodejsLogo from "../../assets/technologies/nodejs.svg";
import PhpLogo from "../../assets/technologies/php.svg";
import PythonLogo from "../../assets/technologies/python.svg";
import ReactLogo from "../../assets/technologies/react.svg";
import SugarCRMLogo from "../../assets/technologies/sugar.svg";
import SymfonyLogo from "../../assets/technologies/symfony.svg";
import TypescriptLogo from "../../assets/technologies/typescript.svg";
import WordpressLogo from "../../assets/technologies/wordpress.svg";
import SectionHead from "../Shared/SectionHead";
import SectionWrapper from "../Shared/SectionWrapper";

const ListBackendTechnologies = [
  {
    name: "Node.js",
    logo: NodejsLogo,
  },
  {
    name: "PHP",
    logo: PhpLogo,
  },
  {
    name: "Python",
    logo: PythonLogo,
  },
  {
    name: "Laravel",
    logo: LaravelLogo,
  },
  {
    name: "Symfony",
    logo: SymfonyLogo,
  },
  {
    name: "MySQL",
    logo: MysqlLogo,
  },
];

const ListFrontendTechnologies = [
  {
    name: "React",
    logo: ReactLogo,
  },
  {
    name: "Angular",
    logo: AngularLogo,
  },
  {
    name: "TypeScript",
    logo: TypescriptLogo,
  },
  {
    name: "JavaScript",
    logo: JavascriptLogo,
  },
  {
    name: "HTML5",
    logo: HtmlLogo,
  },
  {
    name: "CSS3",
    logo: CssLogo,
  },
];

const ListCmsTechnologies = [
  {
    name: "Drupal",
    logo: DrupalLogo,
  },
  {
    name: "WordPress",
    logo: WordpressLogo,
  },
  {
    name: "Joomla",
    logo: JoomlaLogo,
  },
  {
    name: "SugarCRM",
    logo: SugarCRMLogo,
  },
];

const ListDevopsTechnologies = [
  {
    name: "Docker",
    logo: DockerLogo,
  },
  {
    name: "AWS",
    logo: AwsLogo,
  },
  {
    name: "GCP",
    logo: GcpLogo,
  },
  {
    name: "Linux",
    logo: LinuxLogo,
  },
  {
    name: "Nginx",
    logo: NginxLogo,
  },
  {
    name: "Apache",
    logo: ApacheLogo,
  },
];

const TechnologyBoxes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const TechnologyBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundTertiary};
  padding: 20px;
  border-radius: 5px;
  .box-title {
    font-size: ${({ theme }) => theme.fontSizeMd};
    text-align: center;
    margin: 0 0 25px 0;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textSecondary};
  }
  .technology-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
  .technology-item {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-direction: column;
    flex: 1;
  }
`;

const Technologies: FC = () => {
  return (
    <SectionWrapper>
      <SectionHead title="Technologies" />
      <TechnologyBoxes>
        <TechnologyBox>
          <h3 className="box-title">Backend</h3>
          <div className="technology-list">
            {ListBackendTechnologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  width={50}
                  className="technology-logo"
                />
                <span className="technology-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </TechnologyBox>
        <TechnologyBox>
          <h3 className="box-title">Frontend</h3>
          <div className="technology-list">
            {ListFrontendTechnologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <img src={tech.logo} alt={tech.name} width={50} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </TechnologyBox>
        <TechnologyBox>
          <h3 className="box-title">CMS / CRM</h3>
          <div className="technology-list">
            {ListCmsTechnologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <img src={tech.logo} alt={tech.name} width={50} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </TechnologyBox>
        <TechnologyBox>
          <h3 className="box-title">DevOps / Cloud</h3>
          <div className="technology-list">
            {ListDevopsTechnologies.map((tech, index) => (
              <div key={index} className="technology-item">
                <img src={tech.logo} alt={tech.name} width={50} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </TechnologyBox>
      </TechnologyBoxes>
    </SectionWrapper>
  );
};

export default Technologies;
