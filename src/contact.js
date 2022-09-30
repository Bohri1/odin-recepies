//Contact tab creation
function createContactTab() {
    const contact = document.createElement('div'); //Create Contact Div
    contact.classList.add('contact');

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '012 345 678';

    const address = document.createElement('p');
    address.textContent = 'Zone - North, Strumica, Macedonia';

    const location = document.createElement('img');
    location.src = 'images/royalExpressLocation.jpg'
    location.alt = `Royal Express' location`

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(location);

    return contact;
}

//Create a load function for Contact tab under Main section
function loadContact() {
    const main = document.getElementById('main')
    main.textContent = '' //To keep it empty
    main.appendChild(createContactTab())
}

export default loadContact