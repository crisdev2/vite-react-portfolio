import React, { type ReactNode } from "react";
import styled from "styled-components";
import { hexToRgba } from "../../utilities/color";

type SectionHeadProps = {
  title: ReactNode;
  description?: ReactNode;
  image?: string;
};

const SectionHeadWrapper = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizeLg};
  font-family: ${({ theme }) => theme.fontSecondary};
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  padding: 16px 0 8px 0;
`;

const SectionDescription = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeMd};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ImageParallax = styled.div<{ image: string }>`
  margin-top: 40px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-blend-mode: darken;
  background-image: linear-gradient(
      ${({ theme }) => hexToRgba(theme.background, 0.7)},
      ${({ theme }) => hexToRgba(theme.background, 0.7)}
    ),
    url(${({ image }) => image});
  overflow: hidden;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  .parallax-title {
    font-size: ${({ theme }) => theme.fontSizeXl};
    font-family: ${({ theme }) => theme.fontSecondary};
    color: ${({ theme }) => theme.textPrimary};
    text-align: center;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.basePadding};
    max-width: ${({ theme }) => theme.contentWidth};
    position: relative;
    top: 20px;
    font-weight: bold;
    text-shadow: 1px 1px 4px ${({ theme }) => hexToRgba(theme.background, 0.7)};
  }
  .parallax-description {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px 0;
    background: linear-gradient(
      to top,
      ${({ theme }) => hexToRgba(theme.background, 0.9)} 0%,
      ${({ theme }) => hexToRgba(theme.background, 0.6)} 50%,
      ${({ theme }) => hexToRgba(theme.background, 0)} 100%
    );
    color: ${({ theme }) => theme.textPrimary};
  }
  .parallax-text {
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.basePadding};
    max-width: ${({ theme }) => theme.contentWidth};
    bottom: 20px;
    line-height: 1.6;
    text-align: center;
  }
`;

const SectionHead: React.FC<SectionHeadProps> = ({
  title,
  description,
  image,
}) => (
  <SectionHeadWrapper>
    {!image && <SectionTitle>{title}</SectionTitle>}
    {!!image && (
      <ImageParallax image={image}>
        <div className="parallax-title">{title}</div>
        {!!description && (
          <div className="parallax-description">
            <div className="parallax-text">{description}</div>
          </div>
        )}
      </ImageParallax>
    )}
    {!!description && !image && (
      <SectionDescription>{description}</SectionDescription>
    )}
  </SectionHeadWrapper>
);

export default SectionHead;
