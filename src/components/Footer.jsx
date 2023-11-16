import styled from "styled-components";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterTitle = styled.div`
  font-weight: 400;
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #696d72;
  font-weight: 400;
  font-size: 2rem;
  padding: 1rem;

  a {
    color: #696d72;

    text-decoration: none;

    &:hover {
      color: #fff;

      text-decoration: underline;
    }
  }
`;

const FooterDesc = styled.div`
  font-weight: 400;
  line-height: 2;
  color: #696d72;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>devsForFun(❤️)</FooterTitle>
      <FooterIcons>
        <a
          href="https://twitter.com/devsForFun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.linkedin.com/company/devsforfun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </FooterIcons>
      <FooterDesc>
        by{" "}
        <a
          href="https://gdsc.community.dev/raghu-engineering-college-visakhapatnam/"
          target="_blank"
          rel="noopener noreferrer"
        >
          gdscrec
        </a>
        ,{" "}
        <a
          href="https://gdsc.community.dev/university-of-indonesia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          gdsc.ui
        </a>
        ,{" "}
        <a
          href="https://gdsc.community.dev/kristu-jayanti-college-bengaluru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          gdsc.kjc
        </a>
        ,{" "}
        <a
          href="https://gdsc.community.dev/university-of-hull/"
          target="_blank"
          rel="noopener noreferrer"
        >
          gdsc_hull
        </a>
        <br />
        website design inspired by{" "}
        <a
          href="https://buildspace.so/"
          target="_blank"
          rel="noopener noreferrer"
        >
          buildspace
        </a>
        <br />
        this program is not endorsed by Google, GDSC program, or buildspace in
        any way
      </FooterDesc>
    </FooterContainer>
  );
};

export default Footer;
