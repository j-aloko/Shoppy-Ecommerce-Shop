import styled from "styled-components";
import Navbar from "./../Components/Navbar";
import Announcement from "./../Components/Announcement";
import Footer from "./../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({ margin: "0px 10px", padding: "5px", fontSize: "12px" })}
`;

const TopTextWrapper = styled.span`
  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductInfoContainer = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: black;
  border: none;
  height: 1px;
`;

const ProductSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border: radius;
  padding: 20px;
  height: 60vh;
`;
const SummaryTitle = styled.h3`
  font-weight: 200;
  ${mobile({ textAlign: "center" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const ProductInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductImage = styled.img`
  width: 200px;
  ${mobile({ width: "150px" })}
`;

const SubDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductQtyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Quantity = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px", fontSize: "15px", fontWeight: "bold" })}
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", fontSize: "20px" })}
`;

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const shippingCost = 5;
  const shippingDiscount = 5;

  const Amount = cart.total - shippingCost - shippingDiscount;

  const config = {
    reference: new Date().getTime().toString(),
    email: "jaloko@gmail.com",
    amount: Amount * 100,
    currency: "GHS",
    publicKey: "pk_live_833db565d79a9ddbecb86c006281316aeb1522e6",
  };

  const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Checkout",
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTextWrapper>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
          </TopTextWrapper>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <ProductInfoContainer>
            {cart.products.map((product) => (
              <ProductInfoWrapper>
                <ProductDetail>
                  <ProductImage src={product.img} />
                  <SubDetail>
                    <ProductName>
                      <b>Product:</b>Casual Wear
                    </ProductName>
                    <ProductID>
                      <b>ID:</b>
                      {product._id}
                    </ProductID>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b>
                      {product.size}
                    </ProductSize>
                  </SubDetail>
                </ProductDetail>
                <PriceDetail>
                  <ProductQtyContainer>
                    <Add />
                    <Quantity>{product.quantity}</Quantity>
                    <Remove />
                  </ProductQtyContainer>
                  <Price>${product.price * product.quantity}</Price>
                </PriceDetail>
              </ProductInfoWrapper>
            ))}
            <Hr />
          </ProductInfoContainer>
          <ProductSummary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping Cost</SummaryItemText>
              <SummaryItemPrice>${shippingCost}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>${shippingDiscount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                ${cart.total - shippingCost - shippingDiscount}
              </SummaryItemPrice>
            </SummaryItem>
            <PaystackButton {...componentProps} />
          </ProductSummary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CartPage;
