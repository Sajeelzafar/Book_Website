const addBtn = document.querySelector('.addButton');
const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const bookContainer = document.querySelector('.bookContainer');
const rmvButton = document.querySelector('.removeButton');

let counter = 0;
let books = [];

function AddBook( title, author){
    this.title = title;
    this.author = author;
    counter++;
    return;
}

function printBook(newBook){
    for (let i=0; i < newBook.length; i++){
        const div = document.createElement('div');
        div.classList.add('bookbox');
        bookContainer.appendChild(div);
        const span = document.createElement('span');
        span.classList.add('bookText');
        span.innerHTML = bookTitle.value + "<br>" + bookAuthor.value + "<br>";
        div.appendChild(span);
        const removeButton = document.createElement('button');
        removeButton.setAttribute("id", counter);
        removeButton.innerText = "Remove";
        div.appendChild(removeButton);
        const divider = document.createElement('hr');
        div.appendChild(divider);
        
        removeButton.addEventListener('click', (e)=>{
            bookContainer.removeChild(div);
            removefunction(e.target.id);
        }); 

        return
    }
}


addBtn.addEventListener('click', () =>{
    const newBook = new AddBook(bookTitle.value, bookAuthor.value);
    books.push(newBook);
    printBook(books);
})

function removefunction(removeIndex){
    books.splice(removeIndex, 1);
}
    

    



