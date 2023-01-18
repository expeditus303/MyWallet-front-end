import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Title>MyWallet</Title>
      <Input placeholder="e-mail" />
      <Input placeholder="password" />
      <Button />
    </>
  );
}

const Title = styled.h1`
  font-family: "Silkscreen", cursive;
  font-size: 32px;
  color: #ffffff;
  margin-top: 160px;
  margin-bottom: 25px;
`;

const Input = styled.input`
  width: 326px;
  height: 58px;
  background: #ffffff;
  border-radius: 5px;
  border-style: none;
  margin-top: 15px;
`;

const Button = styled.button`
    
`
