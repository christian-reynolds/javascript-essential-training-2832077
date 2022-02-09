import Book from "./Book.js";

const kingBook1 = new Book("Apt Pupil", "Stephen King", 500, 1);
const kingBook2 = new Book("Blaze", "Stephen King", 500, 1);
const kingBook3 = new Book("The Body", "Stephen King", 500, 1);
const kingBook4 = new Book("Carrie", "Stephen King", 500, 1);
const kingBook5 = new Book("Christine", "Stephen King", 500, 1);

kingBook1.changeEdition(2);
kingBook5.changeEdition(4);

console.log("Book 1", kingBook1);
console.log("Book 2", kingBook2);
console.log("Book 3", kingBook3);
console.log("Book 4", kingBook4);
console.log("Book 5", kingBook5);
