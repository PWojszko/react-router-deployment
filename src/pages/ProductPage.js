import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const ProductPage = ({ match }) => {
  return (
    <>
      <h1>Strona produktu</h1>
      <Product id={match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

export default ProductPage;
