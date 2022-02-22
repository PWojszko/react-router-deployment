import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan nowak",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero aliquam expedita quaerat iusto rem magnam quas veritatis repellat, quasi soluta sint laudantium quos recusandae quam enim culpa tempore eaque? Eligendi?",
  },
  {
    id: 2,
    title: "Jakiś tekst",
    author: "Adam Słowak",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero aliquam expedita quaerat iusto rem magnam quas veritatis repellat, quasi soluta sint laudantium quos recusandae quam enim culpa tempore eaque? Eligendi?",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    author: "Piotr Łotr",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero aliquam expedita quaerat iusto rem magnam quas veritatis repellat, quasi soluta sint laudantium quos recusandae quam enim culpa tempore eaque? Eligendi?",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return (
    <div className="home">
      <h1>Strona główna</h1>
      {artList}
    </div>
  );
};

export default HomePage;
