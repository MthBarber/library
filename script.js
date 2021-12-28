//My Array to store Books

let myLibrary = [{title: "Periodization Training for sports", author: "Tudor Bompa", pages: 525 + " pages", read: "Read"},];


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
myForm.onsubmit = function(e) {
    e.preventDefault();
    let currentBook = addToLibrary();
    myForm.reset();     
    clearContainer();    
    displayLibrary();
    eventListener();
    deleteBook();
    form.style.display = "none";

}

//Create Book instance function

function addToLibrary(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value + " pages";
    let read = document.getElementById("dropdown").value;      
    let newBook = new Book(title, author, pages, read);      
    myLibrary.push(newBook);
    return newBook;  
}

//Get book container element
const bookContainer = document.querySelector(".library-container")


//Loop through array of objects

function displayLibrary(){
    myLibrary.forEach(function(book){

        let div = document.createElement('div');
        let titlePara = document.createElement('p');
        let authorPara = document.createElement('p');
        let pagesPara = document.createElement('p');
        let readPara = document.createElement('p');
        let buttonIcon = document.createElement('button');
        let deleteIcon = document.createElement('button');
        let randomColor = bookColor();
        titlePara.textContent = book.title;
        authorPara.textContent = book.author;
        pagesPara.textContent = book.pages;
        readPara.textContent = book.read;
        div.classList.add("a-book"); 
        readPara.classList.add("read-text");
        buttonIcon.classList.add("read-button");
        buttonIcon.textContent = "Book Read?";
        deleteIcon.classList.add('delete');
        deleteIcon.textContent = 'Delete';          
        bookContainer.appendChild(div);
        div.style.backgroundColor = randomColor;
        div.appendChild(titlePara);
        div.appendChild(authorPara);
        div.appendChild(pagesPara);
        div.appendChild(readPara);
        div.appendChild(buttonIcon);
        div.appendChild(deleteIcon);
    });
}

//make random color
function bookColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    let randomColor = `rgb(${r}, ${g},${b})`
    return randomColor; 
}

//clear container before adding new books

function clearContainer(){
    while(bookContainer.firstChild){
        bookContainer.removeChild(bookContainer.lastChild);
    }
}

//Select all buttons for toggle read/unread feature

const readButtons = document.getElementsByClassName('read-button');
let readText = document.getElementsByClassName('read-text')

//Adds function to buttons that changes Book read status
function eventListener(){
    for (let i = 0; i < readButtons.length; i++){        
        readButtons[i].addEventListener('click', function(){            
            if (readText[i].innerHTML === "Read"){
                readText[i].innerHTML = "Unread";        
                myLibrary[i].read = "Unread";
                
            }else {
                readText[i].innerHTML = "Read";           
                myLibrary[i].read = "Read";                
            }
        })
    }
}


//Make a function to delete a book from the library
const deleteButton = document.getElementsByClassName('delete');

function deleteBook(){
    for (let i = 0; i < deleteButton.length; i++){
        deleteButton[i].addEventListener('click', function(){            
            myLibrary.splice(i,1);
            console.table(myLibrary);
            clearContainer();
            displayLibrary();
            eventListener();
            deleteBook();
        })
    }
}

