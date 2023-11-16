import styled from "styled-components";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Motivation from "./components/Motivation";
import Disclaimer from "./components/Disclaimer";
import CantFollow from "./components/CantFollow";
import About from "./components/About";
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <Background>
      <NavBar />
      <Hero />
      <Info />
      <Motivation />
      <Disclaimer />
      <CantFollow />
      <About />
    </Background>
  );
};

export default App;
