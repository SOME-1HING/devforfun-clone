import styled from "styled-components";
import Navline from "./NavLine";

const imageSize = "16rem";
const Wrapper = styled.div`
  width: 100vw;
  height: 82vh;
  margin-top: 8vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const HeroLeftTitle = styled.div`
  font-size: 5rem;
  font-weight: 800;
`;

const HeroLeftButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
`;
const HeroLeftButton = styled.button`
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

const HeroLeftClickableButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 2rem;
`;
const HeroLeftClickableButton = styled.button`
  border: 1px solid #fff;
  width: fit-content;
  background-color: transparent;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 2rem;
  border-radius: 5rem;
  font-size: 3rem;

  &:hover {
    border: 1px solid #0080ff;
    color: #0080ff;
    cursor: pointer;
  }
`;
const HeroRight = styled.div`
  font-size: 3rem;
  flex: 1;
`;
const ImageCollageGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, ${imageSize});
  grid-template-rows: repeat(2, ${imageSize});

  gap: 0.5rem 0.5rem;
`;

const Image = styled.img`
  width: ${imageSize};
  border-radius: 15px;
`;

const Hero = () => {
  const handleTellMeMoreClick = () => {
    const infoSection = document.getElementById("info");
    infoSection.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  return (
    <>
      <Wrapper>
        <HeroLeft>
          <HeroLeftTitle>
            try to learn how to code for 3 weeks. you in?
          </HeroLeftTitle>
          <HeroLeftButtonContainer>
            <HeroLeftButton buttoncolor="#0f0">$ free</HeroLeftButton>
            <HeroLeftButton buttoncolor="#e5ff00">
              need a computer/laptop
            </HeroLeftButton>
            <HeroLeftButton buttoncolor="#fff">11 nov</HeroLeftButton>
          </HeroLeftButtonContainer>
          <HeroLeftClickableButtonWrapper>
            <div style={{ flex: 1 }}>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdSj4UONrYtMdNbkdqQ37djgdA_Nole_1M0uZiNKHpInjcH7g/closedform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroLeftClickableButton>i&apos;m in</HeroLeftClickableButton>
              </a>
            </div>
            <div style={{ flex: 3 }}>
              <HeroLeftClickableButton onClick={handleTellMeMoreClick}>
                tell me more
              </HeroLeftClickableButton>
            </div>
          </HeroLeftClickableButtonWrapper>
        </HeroLeft>
        <HeroRight>
          <ImageCollageGridContainer>
            <Image src="https://devsforfun.netlify.app/assets/red-daf3ae78.png" />
            <Image src="https://devsforfun.netlify.app/assets/yellow-da0cf8f7.png" />
            <Image src="https://devsforfun.netlify.app/assets/blue-76532c2b.png" />
            <Image src="https://devsforfun.netlify.app/assets/green-385a83b4.png" />
          </ImageCollageGridContainer>
        </HeroRight>
      </Wrapper>
      <Navline />
    </>
  );
};

export default Hero;
