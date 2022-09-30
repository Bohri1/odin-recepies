//Creation of menu and adding items in menu
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        menuItems(
          "Margherita",
          "Tomato sauce, Mozarella, Tomato, Basil"
        )
      );

    menu.appendChild(
        menuItems(
            "Capricciosa",
            "Tomato sauce, Mozarella, Gouda, Italian ham, Mushrooms"
        )
    );

    menu.appendChild(
        menuItems(
            "Pepperoni",
            "Tomato sauce, Mozarella, Gouda, Salami"
        )
    );

    menu.appendChild(
        menuItems(
            "Scandinavian",
            "Tomato sauce, Mozarella, Gouda, Scandinavian ham, Mushrooms"
        )
    );

    menu.appendChild(
        menuItems(
            "Baba Italijana",
            "Italian pelati, Mozarella, Basil"
        )
    );

    menu.appendChild(
        menuItems(
            "Baba Balkana",
            "Tomato sauce, Mozarella, Gouda, Ham, Bell pepper, Olives"
        )
    );

    menu.appendChild(
        menuItems(
            "Vegetarian",
            "Tomato sauce, Mozarella, Gouda, Tomato, Bell pepper, Olives, Mushrooms, Onion, Feta cheese"
        )
    );

    menu.appendChild(
        menuItems(
            "Macedonian",
            "Tomato sauce, Mozarella, Gouda, Tomato, Bell pepper, Olives, Mushrooms, Onion, Macedonian cheese, Salami, Macedonian Ham"
        )
    );

    return menu;
}

//Creation of menu items
function menuItems(name, description) {
    const menuItem = document.createElement("div"); //Creates the Menu cards for each listed food
    menuItem.classList.add("menuItem");

    const foodName = document.createElement("h2"); //The name of the food
    foodName.textContent = name;

    const foodDescription = document.createElement("p"); //The description of the food
    foodDescription.textContent = description;

    const foodImage = document.createElement("img"); //Image of each food (it automatically takes the picutre)
    foodImage.src = `images/${name.toLowerCase()}.jpg`; //The img's source for jpg
    foodImage.alt = `${name}`; //Specific text (attribute to the picture)

    //Append the above things
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

//Load Menu function
function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = ""; //To keep it Clear (6.2 step in Odin Project);
    main.appendChild(createMenu()); //Append load menu with Create menu function
}

export default loadMenu; //Export the load menu function