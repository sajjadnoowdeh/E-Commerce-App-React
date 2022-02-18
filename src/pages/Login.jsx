import React from "react";
import styled from "styled-components";
import { publicRequest } from "../axios/RequstMethod";
import { mobile } from "../responsive";

import { useDispatch, useSelector } from "react-redux";
import { LoginReq } from "../Store/callApi";
import CircularProgress from "@material-ui/core/CircularProgress";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),
    center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "74%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Error = styled.span`
  color: red;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  color: white;
  background-color: teal;
  &:disabled {
    cursor: not-allowed;
    color: green;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Login = () => {
  const [user, setUser] = React.useState({});
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.reducer.user);
  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    LoginReq(dispatch, user);
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input name="username" onChange={handleUser} placeholder="name" />
          <Input
            name="password"
            onChange={handleUser}
            placeholder="lastnaame"
          />
          <Button onClick={(e) => handleLogin(e)}>
            {loading ? (
              <CircularProgress color="secondary" size={"15px"} />
            ) : (
              "SIGIN"
            )}
          </Button>
          <Error>{error && "please again current user pass"}</Error>
          <Link>DO NOT YOU REMEMBER PASSWORD?</Link>
          <Link>SIGN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
