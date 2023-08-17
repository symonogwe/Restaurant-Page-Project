
// function that removes child elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export default function createHome() {
    // select the main div
    const mainDiv = document.querySelector(".main-content");

    removeAllChildNodes(mainDiv);

    // create homePage elements
    const homeHeading = document.createElement("div");
    homeHeading.classList.add("home-heading");
    
    const homeH1 = document.createElement("h1");
    homeH1.classList.add("home-h1")
    homeH1.textContent = "DELIGHT DELI";

    const homeP = document.createElement("p");
    homeP.classList.add("home-p");
    homeP.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ac tortor dignissim convallis aenean et. Turpis egestas pretium aenean 
    pharetra magna ac placerat.`;

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("home-order-btn");
    homeBtn.textContent = "ORDER NOW";

    // append to homeHeading div
    homeHeading.append(homeH1, homeP, homeBtn);

    return mainDiv.append(homeHeading);
}