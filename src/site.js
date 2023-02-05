import createHome from "./home";

const contentDiv = document.getElementById("content");
const navItems = ["Home", "Menu", "About", "Booking"];
let activatedItem = 0;

function header() {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";

  const logo = document.createElement("div");
  logo.id = "logo";
  logo.textContent = "1987";
  logo.classList.add("navItem");
  headerDiv.appendChild(logo);

  const navBar = document.createElement("div");
  navBar.id = "navBar";
  for (const item of navItems) {
    const navItem = document.createElement("div");
    navItem.id = "nav" + item;
    navItem.textContent = item;
    navItem.classList.add("navItem");
    if (item === navItems[activatedItem]) {
        navItem.classList.add("activated");
    }
    navBar.appendChild(navItem);
  }
  headerDiv.appendChild(navBar);

  return headerDiv;
}

contentDiv.appendChild(header());
