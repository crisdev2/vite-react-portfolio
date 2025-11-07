import { type FC } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 20px 0;
  text-align: center;
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.textSecondary};
  font-size: ${({ theme }) => theme.fontSizeSm};
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Footer: FC = () => (
  <FooterWrapper>
    © {new Date().getFullYear()} Cristian Anzola portfolio. All rights reserved.
  </FooterWrapper>
);

export default Footer;
