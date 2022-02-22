import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel admina", path: "/admin" },
];

const Navigation = () => {
  const menu = list.map((element, index) => (
    <li key={index}>
      <NavLink to={element.path} exact={element.exact ? element.exact : false}>
        {element.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
