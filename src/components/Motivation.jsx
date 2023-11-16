import styled from "styled-components";
import Navline from "./NavLine";

const Wrapper = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BgImage = styled.div`
  width: 26vw;
  height: 85vh;
  background-image: url(https://devsforfun.netlify.app/assets/youcandothis-dbe3c231.png);
  background-attachment: fixed;
  background-size: contain;
  background-position: center right;
`;

const MotivationContainer = styled.div`
  margin-top: 2rem;

  padding-left: 4rem;
  padding-right: 4rem;
`;

const MotivationTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
`;

const MotivationDesc = styled.div`
  font-size: 1.5rem;
  font-weight: 500;

  word-wrap: break-word;
  padding-bottom: 1rem;
`;

const MotivationButton = styled.button`
  border: 1px solid #fff;
  width: fit-content;
  background-color: ${(props) => (props.isGrey ? "#ffffff75" : "transparent")};
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  font-size: 2rem;

  &:hover {
    border: 1px solid #0080ff;
    color: #0080ff;
    cursor: pointer;
  }
`;
const Motivation = () => {
  return (
    <>
      <Wrapper>
        <MotivationContainer>
          <MotivationTitle>you can do this!</MotivationTitle>

          <MotivationDesc>
            you might want a high-paying tech job. maybe work at your own
            schedule.
            <br />
            <br />
            all it takes is to make a solid start in coding.
            <br />
            <br />
            you may have tried it before and felt like this was too hard, or it
            wasn&apos;t for you, etc. how about giving it one last shot? not
            saying it&apos;s easy
            <br />
            <br />
            but, if you make it, nothing can stop you after this! let this be
            your best shot ever! you got this!
          </MotivationDesc>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdSj4UONrYtMdNbkdqQ37djgdA_Nole_1M0uZiNKHpInjcH7g/closedform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MotivationButton>hell yes! i&apos;m in</MotivationButton>
          </a>
        </MotivationContainer>
        <BgImage />
      </Wrapper>
      <Navline />
    </>
  );
};

export default Motivation;
