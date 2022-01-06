import React from "react";
import styled from "styled-components";
import { categories } from "../Data";
import CategoryItems from "./CategoryItems";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  flex: wrap;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
