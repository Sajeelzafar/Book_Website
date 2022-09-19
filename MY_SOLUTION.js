const addBtn = document.querySelector('.addButton');
const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const bookContainer = document.querySelector('.bookContainer');

// DISPLAY SAVED DATA ON LOAD
document.addEventListener('DOMContentLoaded', () => {
  let arrBooks;

  if (localStorage.getItem('books') === 'null') {
    arrBooks = [];
  } else {
    arrBooks = JSON.parse(localStorage.getItem('books'));
  }

  arrBooks.forEach((book) => {
    const div = document.createElement('div');
    div.classList.add('bookbox');
    bookContainer.appendChild(div);
    const textContainer = document.createElement('div');
    textContainer.classList.add('bookText');
    textContainer.innerHTML = `

              <p>${book.title}</p>
              <p>${book.author} </p>`;

    div.appendChild(textContainer);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    div.appendChild(removeButton);
    const divider = document.createElement('hr');
    div.appendChild(divider);
  });
});

// BOOK PROTOTYPE
function AddBook(title, author) {
  this.title = title;
  this.author = author;
}

// PRINT BOOK ON TOP
function printBook() {
  const div = document.createElement('div');
  div.classList.add('bookbox');
  bookContainer.appendChild(div);
  const textContainer = document.createElement('div');
  textContainer.classList.add('bookText');
  textContainer.innerHTML = `

            <p>${bookTitle.value}</p>
            <p>${bookAuthor.value} </p>`;

  div.appendChild(textContainer);
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  div.appendChild(removeButton);
  const divider = document.createElement('hr');
  div.appendChild(divider);
}

// SAVE TO LOCAL STORAGE
function saveToLocal(book) {
  let arrBooks;

  if (localStorage.getItem('books') === null) {
    arrBooks = [];
  } else {
    arrBooks = JSON.parse(localStorage.getItem('books'));
  }
  arrBooks.push(book);
  localStorage.setItem('books', JSON.stringify(arrBooks));
}

// DELETE FROM LOCALSTORAGE
function deleteInStorage(book) {
  let arrBooks;

  if (localStorage.getItem('books') === null) {
    arrBooks = [];
  } else {
    arrBooks = JSON.parse(localStorage.getItem('books'));
  }
  const elementText = book.children[0].children[0].innerText;
  const spliceBook = arrBooks.map((element) => element.title).indexOf(elementText);
  arrBooks.splice(spliceBook, 1);
  localStorage.setItem('books', JSON.stringify(arrBooks));
}

// ADD ELEMENT TO LIST
addBtn.addEventListener('click', () => {
  if (bookTitle.value !== '' && bookAuthor !== '') {
    const newBook = new AddBook(bookTitle.value, bookAuthor.value);
    saveToLocal(newBook);
    printBook();
  }
});

// DELETE ELEMENT FROM DOM
function deleteFromDom(e) {
  const item = e.target;
  const parent = item.parentElement;

  parent.remove();
  deleteInStorage(parent);
}

bookContainer.addEventListener('click', deleteFromDom);