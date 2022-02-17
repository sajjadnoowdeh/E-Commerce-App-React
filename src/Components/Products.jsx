import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import axios from "axios";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ filters, category, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = category
        ? await axios.get(
            `http://localhost:5000/api/products?category=${category}`
          )
        : await axios.get(`http://localhost:5000/api/products`);
      setProducts(res.data);
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [filters, products, category]);

  useEffect(() => {
    if (sort === "newset") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {category
        ? filterProducts.map((item) => <Product key={item._id} item={item} />)
        : products.map((item) => <Product key={item._id} item={item} />)}
    </Container>
  );
};

export default Products;
