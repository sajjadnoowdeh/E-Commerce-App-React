import React from "react";
import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { mobile } from "../responsive";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Continer = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  text-align: center;
`;

const Languge = styled.span`
  cursor: pointer;
  font-size: 14px;
  ${mobile({ display: "none" })}
`;
const SearchContiner = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;

const Input = styled.input`
  border: 0;
  ${mobile({ width: "46px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "14px", marginLeft: "2px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
  const { quantity } = useSelector((state) => state.reducer.cart);
  return (
    <Continer>
      <Wrapper>
        <Left>
          <Languge>EN</Languge>
          <SearchContiner>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContiner>
        </Left>
        <Center>
          <Logo>Shopping Cart</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <Link to={"/login"}>
            <MenuItem>SIGN UP</MenuItem>
          </Link>
          <Link to={"/cart"}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Continer>
  );
};

export default Navbar;
