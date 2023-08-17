
export default function createMenu() {
    // select the main div
    const mainDiv = document.querySelector(".main-content");

    // create menu page elements
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    // create 6 menu cards
    for(let i = 1; i <= 6; i++) {
        let menuCard = document.createElement("div");
        menuCard.classList.add("menu-card", `menu-${i}`);

        menuContainer.append(menuCard);
    }

    return mainDiv.append(menuContainer);
}