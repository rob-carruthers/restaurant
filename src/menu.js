const menuItems = [
  {
    name: "Olive & Anchovy Tapenade",
    price: 7,
    description: "Served with marinated garlic cloves.",
  },
  {
    name: "Charred Baby Artichoke Salad",
    price: 12,
    description:
      "Quick-charred Argentinian artichoke hearts served with a fig and aniseed balsamic dressing.",
  },
  {
    name: "Springbok Biltong Board",
    price: 14,
    description:
      "Hand-prepared Botswanan springbok spiced and cured in the traditional manner.",
  },
  { name: "break" },
  {
    name: "Gorgonzola & Ajwain Mezzelune",
    price: 23,
    description:
      "Freshly prepared filled pasta, always hand-made on the day, filled with vibrant Gorgonzola imported from Lombardia.",
  },
  {
    name: "Salmon Loin Tartare",
    price: 27,
    description:
      "Line-caught salmon diced, served as a tartare with beetroot, caraway, and potato accompanied by a Dijon dressing.",
  },
  {
    name: "Flash-burnt Ox Fillet",
    price: 38,
    description:
      "Experience a crisp charred outer, smooth marbling, and a perfect rare mouthfeel all at once with our extreme high-heat cooking technique. Served with one-week fries and port jus.",
  },
  { name: "break" },
  {
    name: "Artisan Afrikaans Cheeseboard",
    price: 27,
    description: "A selection of luxury cheeses imported direct from South Africa."
  },
  { name: "break" },
  {
    name: "Whiskey & Crystallised Orange Panna Cotta",
    price: 15,
    description: "A delicate panna cotta prepared with single-malt whiskey and bittered crystallised orange."
  },
  {
    name: "Black Chocolate & Lychee Wafer",
    price: 17,
    description: "Experience an intense and distilled Peruvian dark chocolate balanced with a fragrant lychee syrup, served on a sugared wafer."
  },
  { name: "break" },
  {
    name: "Coffee & Truffles",
    price: 12,
    description: "Black coffee served short with a range of sweet truffles."
  }
];

function createMenu() {
  const menuDiv = document.createElement("div");
  menuDiv.id = "menuDiv";

  const menuList = document.createElement("div");
  menuList.id = "menuList";

  const title = document.createElement("div");
  title.textContent = "Tasting Menu";
  title.classList.add("title");

  const subHeader = document.createElement("div");
  subHeader.classList.add("subHeader");
  subHeader.textContent =
    "Our tasting menu is served both à la carte and as a set to share (recommended).";

  menuDiv.appendChild(title);
  menuDiv.appendChild(subHeader);

  for (const item of menuItems) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    if (item.name === "break") {
      menuItem.innerHTML = "<hr>";
    } else {
      const menuItemHeader = document.createElement("div");
      menuItemHeader.classList.add("menuItemHeader");
      const name = document.createElement("div");
      name.class = "menuItemName";
      name.textContent = item.name;
      menuItemHeader.appendChild(name);

      const price = document.createElement("div");
      price.class = "menuItemPrice";
      price.textContent = item.price;
      menuItemHeader.appendChild(price);

      const description = document.createElement("div");
      description.classList.add("menuItemDescription");
      description.textContent = item.description;
      menuItem.appendChild(menuItemHeader);
      menuItem.appendChild(description);
    }
    menuList.appendChild(menuItem);
  }

  menuDiv.appendChild(menuList);

  return menuDiv;
}

export default createMenu;
