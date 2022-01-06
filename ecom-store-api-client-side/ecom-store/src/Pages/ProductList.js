import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import { mobile } from "./../Responsive";
import { useLocation } from "react-router-dom";
import ProductsByCategory from "./../Components/ProductsByCategory";
import publicRequest from "./../requestMethod";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 15px;
`;

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  console.log(cat);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  //on page render, fetch products by categories

  useEffect(() => {
    const getCategory = async () => {
      if (cat) {
        try {
          const res = await publicRequest.get(`products?category=${cat}`);
          setProducts(
            res.data.filter((product) => product.category.includes(cat))
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await publicRequest.get(`products`);
          setProducts(res.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCategory();
  }, [cat]);

  const handleFilterByColor = (e) => {
    setProducts(
      products.filter((product) => product.color.includes(e.target.value))
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select onChange={handleFilterByColor}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Gray</Option>
            <Option>Ash</Option>
            <Option>Brown</Option>
            <Option>Wine</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductsContainer>
        {products?.map((product) => (
          <ProductsByCategory product={product} key={product?._id} />
        ))}
      </ProductsContainer>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
