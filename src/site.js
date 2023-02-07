import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";
import 'iconify-icon';

const contentDiv = document.createElement("div");
contentDiv.id = "content";

const navItemTitles = ["Home", "Menu", "About", "Booking"];

function header() {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "1987";
  headerDiv.appendChild(logo);

  const navBar = document.createElement("div");
  navBar.id = "navBar";
  for (const item of navItemTitles) {
    const navItem = document.createElement("div");
    navItem.id = "nav" + item;
    navItem.textContent = item;
    navItem.classList.add("navItem");
    if (item === "Home") {
      navItem.classList.add("activated");
    }
    navItem.addEventListener("click", navigate);

    navBar.appendChild(navItem);
  }
  headerDiv.appendChild(navBar);

  document.body.appendChild(headerDiv);
}

function footer() {
  const footerDiv = document.createElement("div");
  footerDiv.id = "footer";
  footerDiv.innerHTML = '<div>© Rob Carruthers 2023 <a href="https://github.com/rob-carruthers/restaurant" target="_blank"><iconify-icon icon="mdi:github" style="color: black;"></iconify-icon></a></div>'

  return footerDiv;
}

async function navigate(event) {
  const navTarget = event.target.id.slice(3);
  const navItems = document.getElementsByClassName("navItem");

  Array.from(navItems).forEach((item) => item.classList.remove("activated"));
  event.target.classList.add("activated");

  contentDiv.classList.remove("fadeInEffect");
  contentDiv.classList.add("fadeOutEffect");
  // wait 0.5s for the first animation to clear
  await new Promise(r => setTimeout(r, 500));
  contentDiv.textContent = "";
  contentDiv.classList.remove("fadeOutEffect");
  contentDiv.classList.add("fadeInEffect");
  let content = [];

  switch (navTarget) {
    case "Home":
      contentDiv.appendChild(createHome());
      break;
    case "Menu":
      contentDiv.appendChild(createMenu());
      break;
    case "About":
      contentDiv.appendChild(createAbout());
      break;
  }
  contentDiv.appendChild(footer());
}

header();
contentDiv.classList.add("fadeInEffect");
document.body.appendChild(contentDiv);
contentDiv.appendChild(createHome());
contentDiv.appendChild(footer());
