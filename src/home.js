import homeImage from "./images/madie-hamilton-dZ-HI4EuWcA-unsplash.jpg";

function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.id = "homeDiv";

  const title = document.createElement("div");
  title.classList.add("logo");
  title.style.fontSize = "5em";
  title.textContent = "1987";

  const topImg = document.createElement("img");
  topImg.classList.add("topImg");
  topImg.src = homeImage;

  const homeContent = document.createElement("div");
  homeContent.innerHTML = "<i>When magic happens, time stands still...</i>";
  homeContent.innerHTML += "<br>";
  homeContent.innerHTML += "A new concept restaurant for the discerning palate."

  homeDiv.appendChild(title);
  homeDiv.appendChild(topImg);
  homeDiv.appendChild(homeContent);

  return homeDiv;
}

export default createHome;
