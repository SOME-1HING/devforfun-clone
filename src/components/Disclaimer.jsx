import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  border: 1px dashed #63676e;
  height: 70vh;
  width: 90vw;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const DisclaimerContent = styled.div`
  width: 60%;
  padding: 2rem;
  margin: auto;
  text-align: center;
`;

const DisclaimerButton = styled.button`
  border: 1px dashed red;
  border-radius: 25px;
  background-color: #f001;
  color: #ea4335;
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: 2rem;
  font-weight: 800;

  flex: 1;
`;

const DisclaimerDesc = styled.div`
  padding: 2rem;
  font-size: 2rem;
  font-weight: 500;
  flex: 3;
`;

const Disclaimer = () => {
  return (
    <Wrapper>
      <Container>
        <DisclaimerContent>
          <DisclaimerButton>disclaimer</DisclaimerButton>
          <DisclaimerDesc>
            this course will not make you a professional developer or a
            freelancer! this will only teach how to start, understand, write,
            and use some real developer tools for coding so that you can
            continue your coding journey without feeling intimidated.
          </DisclaimerDesc>
        </DisclaimerContent>
      </Container>
    </Wrapper>
  );
};

export default Disclaimer;
