import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>{<Header />}</header>

          <main>
            <aside>{<Navigation />}</aside>
            <section className="page">{<Page />}</section>
          </main>

          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
