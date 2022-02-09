class Book {
  constructor(title, author, numberOfPages, edition) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.edition = edition;
  }
  changeEdition(newEdition) {
    this.edition = newEdition;
  }
}

export default Book;
