import { Add, Remove } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newslatter from "../Components/Newslatter";
import { mobile } from "../responsive";

import { useParams } from "react-router";
import { publicRequest } from "../axios/RequstMethod";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Store/reducers/cart.reducer/cartReducer";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContiner = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 20px;
  ${mobile({ padding: "10px" })}
`;
const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-item: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContiner = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContiner = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [qantity, setQantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleAmount = (type) => {
    if (type === "minus") {
      qantity > 1 && setQantity(qantity - 1);
    } else {
      setQantity(qantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({ ...product, qantity, size, color }));
  };
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContiner>
          <Img src={product.img} />
        </ImgContiner>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              {product.color?.map((c, index) => (
                <FilterColor
                  key={index}
                  color={c}
                  onClick={(e) => setColor(c)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((size, index) => (
                  <FilterSizeOption key={index}>{size}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContiner>
            <AmountContiner>
              <Remove onClick={() => handleAmount("minus")} />
              <Amount>{qantity}</Amount>
              <Add onClick={() => handleAmount("plus")} />
            </AmountContiner>
            <Button onClick={handleAddToCart}>Add To Card</Button>
          </AddContiner>
        </InfoContainer>
      </Wrapper>
      <Newslatter />
      <Footer />
    </Container>
  );
};

export default Product;
