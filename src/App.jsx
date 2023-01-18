import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Body>
      <Home />
      </Body>
    </>
  );
}

export default App;

const Body = styled.div`
  height: 100vh;
  width: 375px;
  margin: auto;
  background-color: #8C11BE;

  display: flex;
  flex-direction: column;
  align-items: center;
`