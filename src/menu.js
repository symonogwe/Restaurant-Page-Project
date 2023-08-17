
// function that removes child elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function that creates menu page
export default function createMenu() {
    // select the main div
    const mainDiv = document.querySelector(".main-content");

    removeAllChildNodes(mainDiv);

    // create menu page elements
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // create 6 menu cards
    for(let i = 1; i <= 6; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card", `menu-${i}`);

        menuContainer.append(menuCard);
    }

    // select all menu cards
   const menuCards = menuContainer.children;

   // firstChild
   const menu1 = menuCards.item(0);
   menu1.textContent = "hello";
   menu1.classList.add("home-h1");

   console.log(menu1);

    return mainDiv.append(menuContainer);
}