import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItems from "./ProductItems";
//import { popularProducts } from "../Data";
import publicRequest from "./../requestMethod";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductItems product={product} key={product._id} />
      ))}
    </Container>
  );
};

export default Products;
