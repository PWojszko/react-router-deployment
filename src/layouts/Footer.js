import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <p>
              Jesteś na <span>stronie głównej</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page"
        exact
        render={(props) => {
          return (
            <p>
              Jesteś na <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
