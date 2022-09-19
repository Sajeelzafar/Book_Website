const addBtn = document.querySelector('.addButton');
const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const bookContainer = document.querySelector('.bookContainer');

let counter = 0;
let books = [];

function AddBook( bookId, title, author){
    this.id = bookId;
    this.title = title;
    this.author = author;
    counter ++;
}

function displayBook() {
    const div = document.createElement('div');
    div.classList.add('bookbox');
    bookContainer.appendChild(div);
    const span = document.createElement('span');
    span.classList.add('bookText');
    span.innerHTML = bookTitle.value + "<br>" + bookAuthor.value + "<br>";
    div.appendChild(span);
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.innerText = "Remove";
    div.appendChild(removeButton);
    const divider = document.createElement('hr');
    div.appendChild(divider);
}

addBtn.addEventListener('click', () =>{

    const newBook = new AddBook(counter ,bookTitle.value, bookAuthor.value);
    books.push(newBook);
    displayBook();
    console.log(books);
    console.log(counter);
})

if(counter > 0){
    const rmvButton = document.querySelector('.removeButton');

    rmvButton.addEventListener('click', (index)=>{
        console.log("Hello");
    }); 
}


