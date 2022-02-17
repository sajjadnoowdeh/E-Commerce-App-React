import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";
import { mobile } from "../responsive";
import { useNavigate } from "react-router";
const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  const navigate  = useNavigate();
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem 
           key={item.id}
           item={item}
           onClick={()=>navigate(`/products/${item.cat}`)}
          />
      ))}
    </Container>
  );
};

export default Categories;
