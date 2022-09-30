import loadMenu from "./menu"; //Import menu.js file
import loadContact from "./contact"; //Import Contact from Contact.js file
import loadHomePage from "./homePage"; //Import Home Page load from homePage.js file

//Create Header
function createHeader() {
    const headerSection = document.createElement('header');
    headerSection.classList.add("header"); //Creates the header section

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add('h1'); //Creates the first header for the restaurant name
    restaurantName.textContent = "Royal Express";

    //Append the h1 
    headerSection.appendChild(restaurantName);
    //Append the Navigation function
    headerSection.appendChild(navFunc());

    return headerSection;
};

//Create Navigation for the Header and its buttons (tab switching)
function navFunc() {
    const nav = document.createElement('nav');

    //Create Home button
    const homeButton = document.createElement("button");
    homeButton.classList.add('button-nav');
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton); //setActiveButton refers to if a button is selected, then it is not clickable
        loadHomePage();
    });
    
    //Create Menu button
    const menuButton = document.createElement("button");
    menuButton.classList.add('button-nav');
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    //Create Contact Button
    const contactButton = document.createElement("button");
    contactButton.classList.add('button-nav');
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        loadContact();
    })

    //Append the buttons
    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
};

//Set active function (refers to if a button is selected, then it is not clickable)
function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav"); //Select all(3) buttons

    buttons.forEach((button) => {
        if (button != this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

//Create <Main> element
function mainSection() {

    const createMain = document.createElement('main');
    createMain.classList.add("main");
    createMain.setAttribute("id", "main");
    return createMain;

}

//Create footer
function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Bohri1`;
  
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/Bohri1";
  
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
  
    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
  
    return footer;
}

//Initialize the website
function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader()); //appends the header
    content.appendChild(mainSection()); //appends the main section
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav")); //initalize the tab switching
    loadHomePage();
}

//export initializeWebsite function
export default initializeWebsite;
