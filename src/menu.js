
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
    for(let i = 1; i <= 9; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card", `menu-${i}`);

        menuContainer.append(menuCard);
    }

    // select all menu cards
   const menuCards = menuContainer.children;

   // first menu
   const menu1 = menuCards.item(0);
   let menu1Text = document.createElement("h2");
   menu1Text.textContent = "Breakfast";
   menu1Text.classList.add("menu-h2");
   menu1.append(menu1Text);

   // second menu
   const menu2 = menuCards.item(1);
   let menu2Text = document.createElement("h2");
   menu2Text.textContent = "Appetizers";
   menu2Text.classList.add("menu-h2");
   menu2.append(menu2Text);

   // third menu
   const menu3 = menuCards.item(2);
   let menu3Text = document.createElement("h2");
   menu3Text.textContent = "Salads";
   menu3Text.classList.add("menu-h2");
   menu3.append(menu3Text);

   // fourth menu
   const menu4 = menuCards.item(3);
   let menu4Text = document.createElement("h2");
   menu4Text.textContent = "Steak";
   menu4Text.classList.add("menu-h2");
   menu4.append(menu4Text);

   // fifth menu
   const menu5 = menuCards.item(4);
   let menu5Text = document.createElement("h2");
   menu5Text.textContent = "Alcohol";
   menu5Text.classList.add("menu-h2");
   menu5.append(menu5Text);

   // sixth menu
   const menu6 = menuCards.item(5);
   let menu6Text = document.createElement("h2");
   menu6Text.textContent = "Drinks";
   menu6Text.classList.add("menu-h2");
   menu6.append(menu6Text);

   // seventh menu
   const menu7 = menuCards.item(6);
   let menu7Text = document.createElement("h2");
   menu7Text.textContent = "Deserts";
   menu7Text.classList.add("menu-h2");
   menu7.append(menu7Text);

   // eighth menu
   const menu8 = menuCards.item(7);
   let menu8Text = document.createElement("h2");
   menu8Text.textContent = "Pizzas";
   menu8Text.classList.add("menu-h2");
   menu8.append(menu8Text);

   // sixth menu
   const menu9 = menuCards.item(8);
   let menu9Text = document.createElement("h2");
   menu9Text.textContent = "soups";
   menu9Text.classList.add("menu-h2");
   menu9.append(menu9Text);

   console.log(menu1);

    return mainDiv.append(menuContainer);
}