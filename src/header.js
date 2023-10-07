import { homeButtonPressed } from "./home";
import { menuButtonPressed } from "./menu";
import { contactButtonPressed } from "./contact";

export function getHeader() {
    const header = document.createElement('header');
    const links = document.createElement('nav');
    const logo = document.createElement('h1');

    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');

    home.addEventListener("click", homeButtonPressed);
    menu.addEventListener("click", menuButtonPressed);
    contact.addEventListener("click", contactButtonPressed);

    links.classList.add("links");

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    links.appendChild(home);
    links.appendChild(menu);
    links.appendChild(contact);

    logo.textContent = "Larry\'s Steakhouse";

    header.appendChild(links);
    header.appendChild(logo);

    return header;
}