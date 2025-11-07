import { type FC } from "react";
import styled from "styled-components";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Project4 from "../../assets/projects/anla.webp";
import Project1 from "../../assets/projects/comforce.webp";
import Project3 from "../../assets/projects/radionica.webp";
import Project2 from "../../assets/projects/rtvcplay.webp";
import TeamWork from "../../assets/teamwork.jpg";
import type { IProject } from "../../models/project";
import { hexToRgba } from "../../utilities/color";
import SectionHead from "../Shared/SectionHead";
import SectionWrapper from "../Shared/SectionWrapper";
import ProjectItem from "./ProjectItem";

const listProjects: IProject[] = [
  {
    name: "Comforce - Contract Management System",
    color: "#3473f2",
    image: Project1,
    description:
      "The Contract Management System is a comprehensive platform designed to streamline the entire contract lifecycle. It offers features such as contract creation, approval workflows, electronic signatures, and secure storage. The system enhances collaboration among stakeholders, ensures compliance with legal requirements, and provides real-time tracking of contract statuses. With its user-friendly interface and robust reporting capabilities, the Contract Management System empowers organizations to efficiently manage their contracts, reduce risks, and improve overall operational efficiency.",
    role: "Full-Stack Developer",
    technologies: [
      "React.Js",
      "Symfony",
      "MySQL",
      "GCP",
      "Docker",
      "Blockchain",
      "AI",
      "Serverless",
    ],
  },
  {
    name: "RTVCPlay - Public Media Streaming Platform",
    color: "#0099ff",
    image: Project2,
    description:
      "RTVCPlay is a cutting-edge streaming platform that offers a diverse range of content from Colombia's public media channels. It provides users with access to live TV, on-demand videos, and exclusive programming from renowned brands such as Señal Colombia, Canal Institucional, and Radio Nacional de Colombia. The platform features a user-friendly interface, personalized recommendations, and multi-device compatibility, ensuring an engaging and seamless viewing experience for audiences nationwide.",
    role: "Web and Application Development Lead",
    technologies: ["React.Js", "React Native", "Drupal", "MySQL", "AWS"],
  },
  {
    name: "Radiónica - Digital Radio Platform",
    color: "#e72ab8",
    image: Project3,
    description:
      "Radiónica is a digital radio platform that showcases Colombia's diverse music scene. It offers users access to live radio broadcasts, curated playlists, and exclusive content from emerging and established artists. The platform features a modern interface, social sharing capabilities, and personalized recommendations, creating an engaging experience for music lovers.",
    role: "Web and Application Development Lead",
    technologies: ["Angular", "Gatsby.Js", "Ionic", "Drupal", "MySQL", "AWS"],
  },
  {
    name: "ANLA - Environmental Management System",
    color: "#02992d",
    image: Project4,
    description:
      "The Environmental Management System (EMS) developed for the National Authority of Environmental Licenses (ANLA) is a comprehensive platform designed to streamline environmental management processes in Colombia. It offers features such as permit applications, environmental impact assessments, and compliance monitoring. The EMS enhances collaboration among stakeholders, ensures adherence to environmental regulations, and provides real-time tracking of application statuses.",
    role: "Full-Stack Developer",
    technologies: [
      "Native PHP",
      "Bootstrap",
      "jQuery",
      "SQL Server",
      "Windows Server",
    ],
  },
];

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-bottom: 10px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 400px;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    &:not(.swiper-slide-active) {
      filter: blur(6px) brightness(0.7);
      transform: scale(0.9);
      opacity: 0.7;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  .project-image {
    position: relative;
  }
  .project-info {
    padding: 10px;
    &.info-open {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      background-color: ${({ theme }) => theme.backgroundTertiary};
    }
    .see-more {
      margin-top: 10px;
      button {
        background-color: transparent;
        border: none;
        padding: 0;
        color: ${({ theme }) => theme.accent};
        font-size: ${({ theme }) => theme.fontSizeSm};
        text-shadow: 1px 1px 2px
          ${({ theme }) => hexToRgba(theme.backgroundSecondary, 0.7)};
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => hexToRgba(theme.accent, 0.8)};
        }
      }
    }
  }
  .project-role {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background-color: ${({ theme }) =>
      hexToRgba(theme.backgroundSecondary, 0.6)};
    color: ${({ theme }) => theme.textPrimary};
    padding: 5px 10px;
    border-radius: 15px;
    font-size: ${({ theme }) => theme.fontSizeSm};
    text-shadow: 1px 1px 2px ${({ theme }) => theme.backgroundSecondary};
  }
  .project-name {
    color: ${({ theme }) => theme.textPrimary};
    font-weight: bold;
    text-shadow: 1px 1px 2px
      ${({ theme }) => hexToRgba(theme.backgroundSecondary, 0.7)};
  }
  .project-description {
    color: ${({ theme }) => theme.textSecondary};
    font-size: ${({ theme }) => theme.fontSizeSm};
    text-shadow: 1px 1px 2px
      ${({ theme }) => hexToRgba(theme.backgroundSecondary, 0.3)};
    margin: 10px 0;
    line-height: 1.6;
    margin-bottom: 0;
    max-height: 3.2em;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    &.info-open {
      max-height: none;
      overflow: auto;
      -webkit-line-clamp: none;
      -webkit-box-orient: initial;
    }
  }
  .project-technologies {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .technology-badge {
    display: inline-block;
    background-color: ${({ theme }) => hexToRgba(theme.background, 0.2)};
    color: ${({ theme }) => theme.textPrimary};
    border: 1px solid ${({ theme }) => hexToRgba(theme.border, 0.7)};
    border-radius: 12px;
    padding: 3px 8px;
    font-size: ${({ theme }) => theme.fontSizeXs};
    margin-right: 5px;
    margin-bottom: 5px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  background-color: ${({ theme }) => theme.backgroundTertiary};
`;

const Projects: FC = () => {
  return (
    <SectionWrapper>
      <SectionHead
        title="Projects"
        description="These are just a few of the many I've contributed to, allowing me to make a meaningful difference while learning from diverse experiences and roles. I'm proud to have been involved in these projects that have generated significant impact for clients, communities, and industries."
        image={TeamWork}
      />
      <StyledSwiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow]}
        loop
      >
        {listProjects.map((project, index) => (
          <StyledSwiperSlide key={index}>
            <ProjectItem project={project} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </SectionWrapper>
  );
};

export default Projects;
