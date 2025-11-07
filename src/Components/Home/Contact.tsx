import { Fragment, type FC } from "react";
import styled from "styled-components";
import { hexToRgba } from "../../utilities/color";
import SectionHead from "../Shared/SectionHead";
import SectionWrapper from "../Shared/SectionWrapper";

const ListContactMethods = [
  {
    method: "Email",
    detail: (
      <div className="method-email">
        Send me an email at{" "}
        <a href="mailto:da.anzola@gmail.com">da.anzola@gmail.com</a>
      </div>
    ),
    icon: <i className="pi pi-envelope" />,
  },
  {
    method: "LinkedIn",
    detail: (
      <div className="method-linkedin">
        Connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/cristian-anzola/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <i className="pi pi-external-link" />
        </a>
      </div>
    ),
    icon: <i className="pi pi-linkedin" />,
  },
  {
    method: "Whatsapp",
    detail: (
      <div className="method-whatsapp">
        Chat with me on{" "}
        <a
          href="https://wa.me/573124109315"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp <i className="pi pi-external-link" />
        </a>
      </div>
    ),
    icon: <i className="pi pi-whatsapp" />,
  },
  {
    method: "GitHub",
    detail: (
      <div className="method-github">
        Check out my projects on{" "}
        <a
          href="https://github.com/crisdev2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <i className="pi pi-external-link" />
        </a>
      </div>
    ),
    icon: <i className="pi pi-github" />,
  },
];

const FeelFree = styled.span`
  color: ${({ theme }) => theme.accent};
`;

const ContactMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  align-items: stretch;
  .contact-method {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: ${({ theme }) => theme.fontSizeMd};
    border: 2px solid ${({ theme }) => hexToRgba(theme.textContrast, 0.5)};
    border-radius: 5px;
    padding: 18px 15px;
    cursor: default;
    &:hover {
      box-shadow: 0 0 10px ${({ theme }) => theme.textContrast};
    }
    .method-icon {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.textContrast};
      width: 2rem;
      text-align: center;
    }
    .method-detail {
      color: ${({ theme }) => theme.textPrimary};
      a {
        color: ${({ theme }) => theme.textContrast};
        text-decoration: none;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const Contact: FC = () => {
  return (
    <SectionWrapper id="contact">
      <SectionHead
        title="Contact Me"
        description={
          <Fragment>
            Get in touch with me through the following channels —{" "}
            <FeelFree>feel free to reach out anytime! 😊</FeelFree>
          </Fragment>
        }
      />
      <ContactMethods>
        {ListContactMethods.map((contact, index) => (
          <div key={index} className="contact-method">
            <div className="method-icon">{contact.icon}</div>
            <div className="method-detail">{contact.detail}</div>
          </div>
        ))}
      </ContactMethods>
    </SectionWrapper>
  );
};

export default Contact;
