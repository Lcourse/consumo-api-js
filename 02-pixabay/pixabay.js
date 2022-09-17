"use strict";

const searchImages = async (text) => {
  const key = "29979401-5219bf185b28aa110344a569c";
  const url = `https://pixabay.com/api/?key=${key}&q=${text}`;
  const response = await fetch(url);
  return response.json();
};

const createCard = ({ webformatURL }) => {
  const card = document.createElement("div");
  card.classList.add("card-container");
  card.innerHTML = `
  <a href="#" class="card-image">
    <img src=${webformatURL} >
  `;
  return card;
};

const loadGallery = async (text) => {
  const container = document.querySelector(".container-gallery");
  const { hits } = await searchImages(text);
  const cards = hits.map(createCard);
  container.replaceChildren(...cards);
  console.log(cards);
};

const handleKeypress = ({ key, target }) => {
  if (key === "Enter") {
    loadGallery(target.value);
  }
};

document
  .querySelector("#search-input")
  .addEventListener("keypress", handleKeypress);
