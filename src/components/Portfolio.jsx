import React from "react";
import friendsbook from "../assets/portfolio/Friendsbook.png";
import recipeHub from "../assets/portfolio/RecipeHub.png";
import memoryGame from "../assets/portfolio/Memory Game.png";
import craftyFurniture from "../assets/portfolio/Crafty Furniture.png";
import responsiveResume from "../assets/portfolio/Responsive Resume.png";
import productPreviewCard from "../assets/portfolio/Product Preview Card.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: friendsbook,
      demo: "https://mustafakumshi.github.io/Friendsbook/",
      code: "https://github.com/mustafakumshi/Friendsbook",
    },
    {
      id: 2,
      src: recipeHub,
      demo: "https://recipehub8.netlify.app/",
      code: "https://github.com/mustafakumshi/RecipeHub",
    },
    {
      id: 3,
      src: craftyFurniture,
      demo: "https://mustafakumshi.github.io/Crafty-Furniture/",
      code: "https://github.com/mustafakumshi/Crafty-Furniture",
    },
    {
      id: 4,
      src: responsiveResume,
      demo: "https://mustafakumshi.github.io/Responsive-Resume/",
      code: "https://github.com/mustafakumshi/Responsive-Resume",
    },
    {
      id: 5,
      src: memoryGame,
      demo: "https://mustafakumshi.github.io/Memory-Game/",
      code: "https://github.com/mustafakumshi/Memory-Game",
    },
    {
      id: 6,
      src: productPreviewCard,
      demo: "https://mustafakumshi.github.io/Product-Preview-Card/",
      code: "https://github.com/mustafakumshi/Product-Preview-Card",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={demo} target="_blank" rel="noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={code} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
