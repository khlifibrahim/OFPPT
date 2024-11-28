import Document from "./Document.js";

class Book extends Document {
    constructor(id, editionDate, title, author) {
        super(id, editionDate);
        this.title = title;
        this.author = author
    }

    infoBook() {
        console.log(`Book => id: ${this.id}, Title: ${this.title}, Author: ${this.author}, Release Dat: ${this.editionDate}`)
    }
}

export default Book