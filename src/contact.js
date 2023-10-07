import restaurant from './restaurant.jpg';
import { setContent } from './content';

export function contactButtonPressed() {
    document.body.style.backgroundImage = `url(${restaurant})`;
    document.body.style.backgroundPosition = "center";

    setContent(getContactContent());
}

export function getContactContent() {
    const contactContent = [];

    // Hours
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = "Hours";
    contactContent.push(hoursHeader);
    const sunThursHours = document.createElement('p');
    sunThursHours.textContent = "Sunday - Thursday: 11AM - 10PM";
    contactContent.push(sunThursHours);
    const friSatHours = document.createElement('p');
    friSatHours.textContent = "Friday - Saturday: 11AM - 12PM";
    contactContent.push(friSatHours);

    contactContent.push(document.createElement('hr'));

    // Phone
    const phoneHeader = document.createElement('h2');
    phoneHeader.textContent = "Call Us";
    contactContent.push(phoneHeader);
    const phoneNumber = document.createElement('a');
    phoneNumber.href = "tel:555-123-5432";
    phoneNumber.textContent = "555-123-5432";
    contactContent.push(phoneNumber);

    contactContent.push(document.createElement('hr'));

    // Location
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = "Our Location";
    contactContent.push(locationHeader);
    const addressLine1 = document.createElement('p');
    addressLine1.textContent = "47894 302nd St";
    contactContent.push(addressLine1);
    const addressLine2 = document.createElement('p');
    addressLine2.textContent = "Alcester, SD 57001";
    contactContent.push(addressLine2);


    return contactContent;
}