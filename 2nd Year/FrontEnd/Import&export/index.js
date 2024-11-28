import Document from "./Classes/Document.js";
import Book from "./Classes/Book.js"

const document = new Document(1, '2022')
const document_1 = new Document(2, '2010')
const book = new Book(3, '2022', 'Harry Potter', 'J.K. Rowling')

document.infoDoc()
document_1.infoDoc()
book.infoBook()