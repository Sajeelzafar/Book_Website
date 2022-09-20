/*If you separated the code in multiple files and you you have the following issues with the linter: 
complaining about having multiple classes at the same file, or AN UNUSED VARIABLE, disable the linter check 
for that rule in the file with a /* eslint-disable class-methods-use-this.*/

const addBtn = document.querySelector('.addButton');
const bookTitle = document.querySelector('.name');
const bookAuthor = document.querySelector('.author');
const bookContainer = document.querySelector('.bookContainer');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  printBook() {
    const div = document.createElement('div');
    div.classList.add('bookBox');
    bookContainer.appendChild(div);
    const textContainer = document.createElement('div');
    textContainer.classList.add('bookText');
    textContainer.innerHTML = `
      
                  <p>${this.title}</p>
                  <p>${this.author} </p>`;

    div.appendChild(textContainer);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    div.appendChild(removeButton);
  }

  saveToLocal(book) {
    let arrBooks;

    if (localStorage.getItem('books') === null) {
      arrBooks = [];
    } else {
      arrBooks = JSON.parse(localStorage.getItem('books'));
    }
    arrBooks.push(book);
    localStorage.setItem('books', JSON.stringify(arrBooks));
  }

    deleteInStorage(book) {
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

  deleteFromDom(e) {
    const item = e.target;
    const parent = item.parentElement;

    if (e.target.nodeName === 'BUTTON') {
      parent.remove();
      this.deleteInStorage(parent);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let arrBooks;

  if (localStorage.getItem('books') === 'null') {
    arrBooks = [];
  } else {
    arrBooks = JSON.parse(localStorage.getItem('books'));
  }

  arrBooks.forEach((book) => {
    const div = document.createElement('div');
    div.classList.add('bookBox');
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
  });
  bookContainer.addEventListener('click', (e) => {
    const newBook = new Book(bookTitle.value, bookAuthor.value);
    newBook.deleteFromDom(e);
  });
});

addBtn.addEventListener('click', () => {
  if (bookTitle.value !== '' && bookAuthor !== '') {
    const newBook = new Book(bookTitle.value, bookAuthor.value);
    newBook.saveToLocal(newBook);
    newBook.printBook();
  } else {
    document.querySelector('.error').innerText = 'Please Enter a the Title and the Author';
    document.querySelector('.error').style.display = 'flex';
  }
});

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('focus', () => {
    document.querySelector('.error').style.display = 'none';
  });
});