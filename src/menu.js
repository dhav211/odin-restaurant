import steakInPan from './steak_in_pan.jpg'
import { setContent } from './content';

export function menuButtonPressed() {
    document.body.style.backgroundImage = `url(${steakInPan})`;
    document.body.style.backgroundPosition = "35% 50%";

    setContent(getMenuContent());
}

function getMenuContent() {
    const menuContent = [];

    // Appetizers
    menuContent.push(createMenuHeader("Appetizers", "Start your experience off right with mouth-watering, internationally inspired appetizers and delectable sides. These dishes are prepared to order with fresh, high-quality ingredients, and guaranteed to complement any entrée."));
    const appetizerItems = document.createElement('div');
    appetizerItems.classList.add("menu-grid");

    appetizerItems.appendChild(createMenuItem("FRIED CALAMARI", "lightly fried, with sweet & spicy chili sauce"));
    appetizerItems.appendChild(createMenuItem("SIZZLING CRAB CAKES", "two jumbo lump cakes, lemon butter"));
    appetizerItems.appendChild(createMenuItem("VEAL OSSO BUCO RAVIOLI", "saffron-infused pasta, sautéed baby spinach, veal demi-glace"));
    appetizerItems.appendChild(createMenuItem("MUSHROOMS STUFFED WITH CRABMEAT", "broiled & topped with romano cheese"));
    appetizerItems.appendChild(createMenuItem("SPICY SHRIMP", "succulent large shrimp, lightly fried and tossed in spicy cream sauce"));

    menuContent.push(appetizerItems);

    // Soups and salads
    menuContent.push(createMenuHeader("Soups & Salads", "Our soups and fresh salads are a great start to a perfect evening at Larry's. All of our dressings are made fresh in-house, using exclusive recipes."));
    const soupSaladsItems = document.createElement('div');
    soupSaladsItems.classList.add("menu-grid");

    soupSaladsItems.appendChild(createMenuItem("CAESAR SALAD", "romaine hearts, parmesan & romano, creamy caesar"));
    soupSaladsItems.appendChild(createMenuItem("LETTUCE WEDGE","bacon, tomatoes & bleu cheese on crisp greenss"));
    soupSaladsItems.appendChild(createMenuItem("LARRY'S CHOPPED SALAD","bacon, egg, olives, mushrooms, onions, bleu cheese, basil dressing"));
    soupSaladsItems.appendChild(createMenuItem("LARRY BISQUE","new orleans style creamy lobster bisque"));

    menuContent.push(soupSaladsItems);

    //Steaks and chops
    menuContent.push(createMenuHeader("Steaks & Chops", "At Larry's, your last bite is just as good as your first. Our perfected broiling method and seasoning techniques ensure each cut of USDA Prime beef we serve arrives cooked to perfection and sizzling on a 500° plate—just the way Larry likes it."));
    const steaksChopsItems = document.createElement('div');
    steaksChopsItems.classList.add("menu-grid");

    steaksChopsItems.appendChild(createMenuItem("RIBEYE", "16 oz USDA Prime, marbled for flavor & deliciously juicy"));
    steaksChopsItems.appendChild(createMenuItem("T-BONE", "full flavored 24 oz USDA Prime cut"));
    steaksChopsItems.appendChild(createMenuItem("TOMAHAWK RIBEYE", "40 oz USDA Prime bone-in ribeye, well marbled for peak flavor"));
    steaksChopsItems.appendChild(createMenuItem("LAMB CHOPS", "three extra thick marinated chops, with fresh mint"));
    steaksChopsItems.appendChild(createMenuItem("LOBSTER TAIL", "north atlantic tail served sizzling with drawn butter"));

    menuContent.push(steaksChopsItems);

    // Sides
    menuContent.push(createMenuHeader("Sides", "These dishes are prepared to order with fresh, high-quality ingredients, and guaranteed to complement any entrée."));
    const sideItems = document.createElement('div');
    sideItems.classList.add("menu-grid");

    sideItems.appendChild(createMenuItem("BAKED POTATO", "one pound, fully loaded"));
    sideItems.appendChild(createMenuItem("GARLIC MASHED POTATOES", "smooth and creamy, with hints of roasted garlic"));
    sideItems.appendChild(createMenuItem("CREMINI MUSHROOMS", "pan roasted, veal demi-glace, fresh thyme"));
    sideItems.appendChild(createMenuItem("ROASTED BRUSSEL SPROUTS", "bacon, honey butter"));

    menuContent.push(sideItems);

    return menuContent;
}

function createMenuHeader(headerName, headerDescription) {
    const header = document.createElement('div');

    const name = document.createElement('h2');
    name.textContent = headerName;
    header.appendChild(name);

    const divider = document.createElement('hr');
    header.appendChild(divider);

    const description = document.createElement('p');
    description.textContent = "Start your experience off right with mouth-watering, internationally inspired appetizers and delectable sides. These dishes are prepared to order with fresh, high-quality ingredients, and guaranteed to complement any entrée.";
    description.style.fontStyle = "italic";
    header.appendChild(description);
    
    return header;
}

function createMenuItem(itemName, itemDescription) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    const menuItemHeader = document.createElement("h2");
    const menuItemDescription = document.createElement("p");

    menuItemHeader.textContent = itemName;
    menuItemDescription.textContent = itemDescription;

    menuItem.appendChild(menuItemHeader);
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}