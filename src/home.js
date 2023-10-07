import cutSteak from './cut_steak.jpg'
import { setContent } from './content';

export function homeButtonPressed() {
    document.body.style.backgroundImage = `url(${cutSteak})`;
    document.body.style.backgroundPosition = "center";
    setContent(getHomeContent());
}

export function getHomeContent() {
    const homeContent = [];
    const experienceHeader = document.createElement('h2');
    experienceHeader.textContent = "Experience the Meat";
    homeContent.push(experienceHeader);

    homeContent.push(document.createElement('hr'));

    const aboutText = document.createElement('p');
    aboutText.textContent = "Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Enim neque volutpat ac tincidunt vitae semper. Tellus orci ac auctor augue mauris. Donec enim diam vulputate ut pharetra. Facilisis mauris sit amet massa vitae. Mattis molestie a iaculis at erat pellentesque adipiscing. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Nulla porttitor massa id neque. Nibh sed pulvinar proin gravida hendrerit lectus a. Ultricies integer quis auctor elit. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Placerat orci nulla pellentesque dignissim enim. Gravida cum sociis natoque penatibus.";
    homeContent.push(aboutText);

    const moreText = document.createElement('p');
    moreText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    homeContent.push(moreText);

    return homeContent;
}