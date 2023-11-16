import styled from "styled-components";
import Navline from "./NavLine";

const Wrapper = styled.div`
  position: fixed;
  backdrop-filter: blur(4px);
`;
const NavbarContainer = styled.div`
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 12vh;
`;
const NavbarLeft = styled.div``;

const NavImg = styled.img`
  width: 20rem;
`;

const NavbarRight = styled.div``;

const NavButton = styled.button`
  border: 2px solid #fff;
  border-radius: 25px;
  background-color: transparent;
  color: #fff;
  width: 8rem;
  height: 3rem;

  &:hover {
    border: 2px solid #0080ff;
    color: #0080ff;
    cursor: pointer;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <NavbarContainer>
        <NavbarLeft>
          <NavImg src="https://devsforfun.netlify.app/assets/devsforfun-white-5f68ffd0.png" />
        </NavbarLeft>
        <NavbarRight>
          <NavButton>About</NavButton>
        </NavbarRight>
      </NavbarContainer>
      <Navline />
    </Wrapper>
  );
};

export default NavBar;
