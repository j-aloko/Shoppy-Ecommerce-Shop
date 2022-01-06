import React from "react";
import styled from "styled-components";
import { mobile } from "./../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  background-color: white;
  border-radius: 15px 50px 30px 5px;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 10px;
  margin-bottom: 15px;
  display: inline-block;
  width: 45%;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
  box-shadow: 0 9px #999;

  &:active {
    background-color: gray;
    box-shadow: 0 3px #666;
    transform: translateY(4px);
  }
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  color: white;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a New Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
