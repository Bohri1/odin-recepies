//Create Home Page
function createHomePage() {
    const homePage = document.createElement('div');
    homePage.classList.add("homePage");

    //Add Royal Express logo
    const royalExpressLogo = document.createElement("img");
    royalExpressLogo.classList.add('homeImg');
    royalExpressLogo.src = "images/royalexpressHeader.jpg";
    royalExpressLogo.alt = "Royal Express";

    //Append some text on the homePage
    homePage.appendChild(
        createparagraph(
            "Royal express is a cost-effective food delivery service that brings orders straight to your doorstep"
            ));
        //Append the Image (should appear in the middle)
        homePage.appendChild(royalExpressLogo);
    
    return homePage;
}

//Create Paragraph function
function createparagraph(text) {
    const paragraph = document.createElement('p'); //Creates a Paragraph for Home Page
    paragraph.classList.add("homeParagraph");
    paragraph.textContent = text;
    return paragraph;
}

//Create a Load function for home page
function loadHomePage() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHomePage());
}

export default loadHomePage;