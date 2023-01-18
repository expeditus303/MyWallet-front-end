import styled from "styled-components";
import GlobalStyle from "./assets/GlobalStyle";
import SignIn from "./pages/SignIn";
import SignUP from "./pages/SignUp";


function App() {
  return (
    <>
      <GlobalStyle />
      <Body>
      {/* <SignIn /> */}
      <SignUP />
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