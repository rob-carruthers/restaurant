import aboutImage from "./images/jason-leung--eKZLpj7U0E-unsplash.jpg";

const aboutText = [
  "When Kamil Clough-Barry left school at the age of 16, " +
  "he was convinced he had nothing to offer to the world. " +
  "After a series of abrupt endings to jobs, he found himself " +
  "working at Bramble Farm, Rutland. ",

  "Fresh produce, a local passion for traditional cooking, and an " +
  "unexpected trip to South Africa led to Kamil developing a new " +
  "brand of high cuisine.",

  "He made a commitment to use every day to make up for lost direction " +
  "in his life before discovering fine food. He is making up for every " +
  "day since Monday, 13th April 1987."
]

function createAbout() {
  const aboutDiv = document.createElement("div");
  aboutDiv.id = "aboutDiv";

  const aboutTitleContainer = document.createElement("div");
  aboutTitleContainer.style.display = "flex";
  aboutTitleContainer.style.alignItems = "center";
  aboutTitleContainer.style.gap = "5px";

  const title = document.createElement("div");
  title.textContent = "About";
  title.classList.add("title");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.style.fontSize = "2.5rem";
  logo.textContent = "1987";

  aboutTitleContainer.appendChild(title);
  aboutTitleContainer.appendChild(logo)

  const topImg = document.createElement("img");
  topImg.classList.add("topImg");
  topImg.src = aboutImage;
  topImg.style.objectFit = "cover";
  topImg.style.height = "400px";

  aboutDiv.appendChild(aboutTitleContainer);
  aboutDiv.appendChild(topImg);

  for (const para of aboutText) {
    const div = document.createElement("div");
    div.textContent = para;
    div.style.textAlign = "justify";
    aboutDiv.appendChild(div);
  }

  return aboutDiv;
}

export default createAbout;