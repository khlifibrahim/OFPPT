class Document {
    constructor(id, editionDate) {
        this.id = id;
        this.editionDate = editionDate;
    }

    infoDoc() {
        console.log(`Document => id: ${this.id}, Release Dat: ${this.editionDate}`)
    }
}

export default Document;