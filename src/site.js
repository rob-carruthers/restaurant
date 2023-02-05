import createHome from "./home";

const contentDiv = document.createElement("div");
contentDiv.id = "content";

const navItemTitles = ["Home", "Menu", "About", "Booking"];

function header() {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";

  const logo = document.createElement("div");
  logo.id = "logo";
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

function navigate(event) {
  const navTarget = event.target.id.slice(3);
  const navItems = document.getElementsByClassName("navItem");

  Array.from(navItems).forEach((item) => item.classList.remove("activated"));
  event.target.classList.add("activated");

  contentDiv.textContent = "";

  switch(navTarget) {
    case "Home":
      contentDiv.appendChild(createHome());
  }
}

header();
document.body.appendChild(contentDiv);
contentDiv.appendChild(createHome())
