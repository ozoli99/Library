class Book {
    constructor(title = "Unknown", author = "Unknown", pages = 0, isRead = false) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook);
        }
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library();

// User Interface

const accountBtn = document.querySelector("#accountBtn");
const accountModal = document.querySelector("#accountModal");
const addBookBtn = document.querySelector("#addBookBtn");
const addBookModal = document.querySelector("#addBookModal");
const errorMsg = document.querySelector("#errorMsg");
const overlay = document.querySelector("#overlay");
const addBookForm = document.querySelector("#addBookForm");
const booksGrid = document.querySelector("#booksGrid");
const loggedIn = document.querySelector("#loggedIn");
const loggedOut = document.querySelector("#loggedOut");

const setupNavbar = (user) => {
    if (user) {
        loggedIn.classList.add("active");
        loggedOut.classList.remove("active");
    } else {
        loggedIn.classList.remove("active");
        loggedOut.classList.add("active");
    }
};

const setupAccountModal = (user) => {
    if (user) {
        accountModal.innerHTML = `<p>Logged in as</p><p><strong>${user.email.split('@')[0]}</strong></p>`;
    } else {
        accountModal.innerHTML = ``;
    }
};

const openAddBookModal = () => {
    addBookForm.reset();
    addBookModal.classList.add("active");
    overlay.classList.add("active");
};

const closeAddBookModal = () => {
    addBookModal.classList.remove("active");
    overlay.classList.remove("active");
    errorMsg.classList.remove("active");
    errorMsg.textContent = "";
};