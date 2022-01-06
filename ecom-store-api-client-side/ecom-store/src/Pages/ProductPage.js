import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./../Components/Navbar";
import Announcement from "./../Components/Announcement";
import NewsLetter from "./../Components/NewsLetter";
import Footer from "./../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";
import publicRequest from "./../requestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize: "25px", fontWeight: 200, textAlign: "center" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
  ${mobile({ fontSize: "12px", textAlign: "center" })}
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`;

const Option = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 10px 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: black;
  border: none;
  ${mobile({ color: "white" })}
`;

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("products/find/" + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleClick = () => {
    //updating our cart
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title> {product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>${product.price * quantity}</Price>
          <FilterContainer>
            <Filter>
              <FilterText>Color:</FilterText>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterText>Size:</FilterText>
              <Select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() =>
                  quantity > 1 &&
                  setQuantity((prevQuantity) => prevQuantity - 1)
                }
              />
              <Amount>{quantity}</Amount>
              <Add
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              />
            </AmountContainer>
            <Button onClick={handleClick}>
              <ShoppingCartTwoToneIcon />
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
