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

const CantFollowContent = styled.div`
  width: 60%;
  padding: 2rem;
  margin: auto;
  text-align: center;
`;

const CantFollowTitle = styled.h1`
  font-size: 4.5rem;
  width: fit-content;
  margin: auto;
  font-weight: 800;

  flex: 1;
`;

const CantFollowDesc = styled.div`
  padding: 2rem;
  font-size: 2rem;
  font-weight: 500;
  flex: 3;
`;

const CantFollow = () => {
  return (
    <Wrapper>
      <Container>
        <CantFollowContent>
          <CantFollowTitle>
            can&apos;t follow live?
            <br />
            no problem!
          </CantFollowTitle>
          <CantFollowDesc>
            you can register until 3 days from the start date and still submit
            your updates, get your doubts answered over email, and submit the
            final project
          </CantFollowDesc>
        </CantFollowContent>
      </Container>
    </Wrapper>
  );
};

export default CantFollow;
