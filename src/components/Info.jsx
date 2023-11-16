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
  width: 25vw;
  height: 85vh;
  background-attachment: fixed;
  background-size: contain;
  background-position: start;
  background-image: url(https://devsforfun.netlify.app/assets/howdoesitwork-6bd05cf7.png);
`;

const InfoContainer = styled.div`
  padding-left: 4rem;
  padding-right: 4rem;
`;

const InfoTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
`;

const InfoLeftButtonContainer = styled.div`
  display: flex;
`;
const InfoLeftButton = styled.button`
  border: 1px dashed ${(props) => props.buttoncolor};
  border-radius: 25px;
  background-color: transparent;
  color: ${(props) => props.buttoncolor};
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
`;

const InfoDesc = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const InfoButton = styled.button`
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
const Info = () => {
  return (
    <>
      <Wrapper id="info">
        <BgImage />
        <InfoContainer>
          <InfoTitle>How does it work?</InfoTitle>
          <InfoLeftButtonContainer>
            <InfoLeftButton buttoncolor="#0f0">beginner</InfoLeftButton>
            <InfoLeftButton buttoncolor="#e5ff00">14 hours/week</InfoLeftButton>
            <InfoLeftButton buttoncolor="#f00">level: hard</InfoLeftButton>
          </InfoLeftButtonContainer>
          <InfoDesc>
            7 classes, each followed by a day for practice. you&apos;ll build a
            cool little project at the end.
            <br /> <br /> week 1: intro to programming
            <br />
            week 2: use what you&apos;ve learned <br />
            week 3: do it yourself
          </InfoDesc>
          <InfoButton>open full plan</InfoButton>
        </InfoContainer>
      </Wrapper>
      <Navline />
    </>
  );
};

export default Info;
