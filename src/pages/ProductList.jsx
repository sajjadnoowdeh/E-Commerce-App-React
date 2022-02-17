import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Products from "../Components/Products";
import Navbar from "../Components/Navbar";
import Newslatter from "../Components/Newslatter";
import { mobile } from "../responsive";

import { useParams } from "react-router";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContiner = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({width:"0px 20px",display:'flex',flexDirection:'column'})}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right:20px;
  ${mobile({marginRight:"0px"})}
`;
const Select = styled.select`
 padding:10px;
 margin-right:20px;
 ${mobile({margin:"10px 0"})}
`;
const Option = styled.option``;
const ProductList = () => {
  const [filters,setFilterd] = useState({})
  const [sort,setSort] = useState('newset')
  const {category} = useParams();


  const changeFilter =(e)=>{
    const value = e.target.value;
    setFilterd({...filters,[e.target.name]:value})
  }
  console.log(sort);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContiner>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={changeFilter}>
            <Option disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={changeFilter}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value={'newset'}>Newest</Option>
            <Option value={'asc'}>Price (asc)</Option>
            <Option value={'desc'}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContiner>
      <Products
       filters={filters}
       category={category}
       sort={sort}
      />
      <Newslatter />
      <Footer />
    </Container>
  );
};

export default ProductList;
