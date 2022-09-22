//Store user input
let myLibrary = [];

const nameOfBook = document.querySelector('#name');
const author = document.querySelector('#author');
const statusOfBook = document.querySelector('#status');
const valueOfStatus = document.getElementById('status-of-book').getAttribute('value');
const displayTable = document.querySelector('#book-table-body');
const form = document.querySelector('form').addEventListener("submit", (e) =>{
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
});

//Create Table
const $table = document
  .querySelector("table")
  .addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML == "delete") {
      if (confirm(`are you sure you want to delete ${currentTarget.innerText}`))
        deleteBook(findBook(myLibrary, currentTarget.innerText));
    }
    if (e.target.classList.contains("status-button")) {
      changeStatus(findBook(myLibrary, currentTarget.innerText));
    }
    updateLocalStorage();
    render();
  });

//Book Class
class Book {
  constructor(name, author, status) {
    this.name = name;
    this.author = author;
    this.status = status;
  }
}

//This function adds a bood to the library and checks for empty fields
function addBookToLibrary() {
  if (nameOfBook.value.length === 0 || author.value.length === 0) {
    alert("Please, fill all the fields before submitting");
    return;
  }
  const newBook = new Book(nameOfBook.value, author.value, valueOfStatus);

  myLibrary.push(newBook);
  updateLocalStorage();
}

//Allows the user to change the status of the book after input
function changeStatus(book) {
  if (myLibrary[book].status === "read") {
    myLibrary[book].status = "not read";
  } else myLibrary[book].status = "read";
}

//Allows the book to be deleted
function deleteBook(currentBook) {
  myLibrary.splice(currentBook, currentBook + 1);
}


function findBook(libraryArray, name) {
  if (libraryArray.length === 0 || libraryArray === null) {
    return;
  }
  for (book of libraryArray)
    if (book.name === name) {
      return libraryArray.indexOf(book);
    }
}

function clearForm() {
  nameOfBook.value = "";
  author.value = "";
}

function updateLocalStorage() {
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function checkLocalStorage() {
  if (localStorage.getItem("myLibrary")) {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  } else {
    alert("Wow much empty")
  }
}

//Render the book in the Table
function render() {
  checkLocalStorage();
  displayTable.innerHTML = "";
  myLibrary.forEach((book) => {
    const htmlBook = `
      <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td><button class="status-button">${book.status}</button></td>
        <td><button class="delete">delete</button></td>
      </tr>
      `;
    displayTable.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

render();