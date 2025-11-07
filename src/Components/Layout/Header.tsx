import { useEffect, useState, type FC } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  z-index: 1000;
  background-color: transparent;
  transition: background-color 0.3s ease;
  &.scrolled {
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }
`;

const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.contentWidth};
  padding: 0 ${({ theme }) => theme.basePadding};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const HeaderTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizeLg};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-weight: bold;
  color: ${({ theme }) => theme.textContrast};
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
  cursor: default;
`;

const HeaderMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    &:hover {
      opacity: 0.8;
    }
  }
  ${({ theme }) => theme.mediaMobile} {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  ${({ theme }) => theme.mediaMobile} {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const MobileDropdown = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: 0;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  z-index: 2000;
  ul {
    list-style: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  a {
    color: ${({ theme }) => theme.textPrimary};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSizeMd};
    &:hover {
      opacity: 0.8;
    }
  }
`;

const UserActions = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  li {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fontSizeLg};
    &:hover {
      opacity: 0.8;
    }
  }
  ${({ theme }) => theme.mediaMobile} {
    display: none;
  }
`;

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderWrapper className={scrolled ? "scrolled" : ""}>
      <HeaderContent>
        <HeaderTitle>cadev</HeaderTitle>
        <HeaderMenu>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </HeaderMenu>
        <MobileMenuIcon onClick={() => setMobileMenuOpen((open) => !open)}>
          &#9776;
        </MobileMenuIcon>
        <MobileDropdown open={mobileMenuOpen}>
          <ul>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </MobileDropdown>
        <UserActions>
          <ul>
            <li>
              <a href="mailto:da.anzola@gmail.com">
                <i className="pi pi-envelope" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/cristian-anzola/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/573124109315"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-whatsapp" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/crisdev2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-github" />
              </a>
            </li>
          </ul>
        </UserActions>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
