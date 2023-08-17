import phone from "./assets/phone.svg";
import mail from "./assets/gmail.svg";

// function that removes child elements
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function that creates contact page
export default function createContact() {
    // select the main div
    const mainDiv = document.querySelector(".main-content");

    removeAllChildNodes(mainDiv);

    // create page elements
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    // phone div
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone-div");

    const phoneIcon = document.createElement("img");
    phoneIcon.classList.add("contact-icons");
    phoneIcon.src = phone;

    const phoneP = document.createElement("p");
    phoneP.classList.add("contact-p");
    phoneP.textContent = "+254 707 738 73823";

    phoneDiv.append(phoneIcon, phoneP);

    // email div
    const emailDiv = document.createElement("div");
    emailDiv.classList.add("email-div");

    const emailIcon = document.createElement("img");
    emailIcon.classList.add("contact-icons");
    emailIcon.src = mail;

    const emailP = document.createElement("p");
    emailP.classList.add("contact-p");
    emailP.textContent = "DeliDelights@gmail.com";

    emailDiv.append(emailIcon, emailP);

    // maps div
    const mapsDiv = document.createElement("div");
    mapsDiv.classList.add("maps-div");

    // append contact elements to page container
    contactContainer.append(phoneDiv, emailDiv, mapsDiv);

    return mainDiv.append(contactContainer);
}