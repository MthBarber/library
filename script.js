//My Array to store Books

let myLibrary = [{title: "Periodization Training for sports", author: "Tudor Bompa", pages: 525, read: true}];


//Book constructor
function Book(title,author,pages,read){    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    //this.info = function(){
        //return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
   // }
}
//define variable to create a new instance of book
//let newBook = new Book();

//function to make new instances of books to add to array
function addBookToLibrary(){
    
}

//Get button element from page
const addBookButton = document.getElementById('addBook');

//Get popup form id and value

const form = document.getElementById('my-form');
let formValue = document.getElementById('my-form').value;


//Make form appear

const callForm = addBookButton.addEventListener("click", function(){
    if (formValue === "none"){
        form.style.display = "flex";
        formValue = "flex"
    }else {
        form.style.display = "none";
        formValue = "none";
    }
})

const myForm = document.querySelector('form');
//function for when button is clicked to add a book
myForm.onsubmit = function() {
   addToLibrary();
   
    

}

//let newObject = {
//    title: "The Witcher",
//    author: "Some Polish guy",
//    pages: 322,
//    read: "read"
//}
//
//myLibrary.push(newObject);

//Create Book instance function

function addToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("dropdown").value;
    let tempLibrary = [];   
    console.log(`The book is called ${title} by ${author}, ${pages}, ${read}`);
    console.log("hello world", title, author, pages, read);
    let newBook = new Book(title, author, pages, read);
    //console.log(typeof(newBook));
    myLibrary.push(newBook);
    //console.table(newBook);
    //myLibrary = tempLibrary;
    //console.table(myLibrary);
    console.log(`The book is called ${title} by ${author}, ${pages}, ${read}`);
    console.log("hello world", title, author, pages, read);
    return newBook;
}