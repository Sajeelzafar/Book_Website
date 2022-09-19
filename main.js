const addBtn = document.querySelector('.addButton');
const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');

let books = [];



function AddBook( title, author){
    this.title = title;
    this.author = author;
}

addBtn.addEventListener('click', () =>{

    const newBook = new AddBook(bookTitle.value, bookAuthor.value);
    books.push(newBook);
    console.log(books);
})