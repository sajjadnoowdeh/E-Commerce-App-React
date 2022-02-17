import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
 flex:1;
 margin:3px
 height:60vh;
 position:relative;
`;
const Img = styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 ${mobile({height:'30vh'})}
 `;
const Info = styled.div`
 position:absolute;
 top:0;
 left:0;
 width:100%;
 height:100%;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
`;
const Title = styled.h1`
 color:white;
 margin-bottom:20px;
`;
const Button = styled.button`
 border:none;
 padding:10px;
 color:white;
 background-color:gray;
 cursor:pointer;
 font-weight:600;
`;
const CategoryItem = ({ item ,onClick}) => {
  return (
    <Container onClick={onClick}>
      <Img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOW SHOP</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
