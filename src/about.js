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
    "day since Monday, 13th April 1987.",
];

const reviews = [
  {
    content:
      "The best biltong in the world, and a steak that would " +
      "embarrass most London chefs.",
    stars: 5,
    reviewer: "Annette Pearl",
  },
  {
    content:
      "The South African fine cuisine influences were an utter " +
      "revelation to me. A very special find.",
    stars: 5,
    reviewer: "John Goldsmith",
  },
  {
    content:
      "You'd think Kamil would get bored of 5-star reviews by now. But while " +
      "he's still producing world-beating steak, I'm still going to visit.",
    stars: 5,
    reviewer: "Paul An",
  },
  {
    content:
      "I can't think of a more eclectic, yet well-designed and integrated " +
      "menu in London. If you're not here, you're toast.",
    stars: 5,
    reviewer: "Charlie Jackson",
  },
  {
    content:
      "Everybody who comes to 1987 thinks it's the best thing since sliced " +
      "biltong. And guess what - they're not wrong!",
    stars: 5,
    reviewer: "Amanda Hu",
  },
  {
    content:
      "Don't even think twice before booking - you'll thank me at the end " +
      "of your meal.",
    stars: 5,
    reviewer: "Jeremy Warner",
  },  
];

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
  aboutTitleContainer.appendChild(logo);

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

  const reviewsGrid = document.createElement("div");
  reviewsGrid.id = "reviewsGrid";

  for (const review of reviews) {
    const reviewCard = document.createElement("div");
    const reviewContent = document.createElement("div");
    const reviewStars = document.createElement("div");
    const reviewReviewer = document.createElement("div");

    reviewCard.classList.add("reviewCard");
    reviewContent.classList.add("reviewContent");
    reviewStars.classList.add("reviewStars");
    reviewReviewer.classList.add("reviewReviewer");

    reviewContent.textContent = review.content;
    reviewStars.textContent = "★".repeat(review.stars);
    reviewReviewer.textContent = review.reviewer;

    reviewCard.appendChild(reviewContent);
    reviewCard.appendChild(reviewStars);
    reviewCard.appendChild(reviewReviewer);
    reviewsGrid.appendChild(reviewCard);
  }

  aboutDiv.appendChild(reviewsGrid);

  return aboutDiv;
}

export default createAbout;
