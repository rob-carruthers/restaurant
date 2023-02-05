import homeImage from './images/madie-hamilton-dZ-HI4EuWcA-unsplash.jpg'

function createHome() {
  const homeDiv = document.createElement("div");
  homeDiv.id = "homeDiv";
  homeDiv.innerHTML = "<img src=" + homeImage + " class='topImg'></img>"

  return homeDiv;
}

export default createHome;
