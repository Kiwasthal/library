
let myLibrary = []

function CreateBook(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages}`
    }
}

function addBookToLibrary(title,author,pages) {
    const myBook = new CreateBook(title,author,pages)
    return myLibrary.push(myBook)
}

addBookToLibrary("theHobbit","Tolkien",362);
addBookToLibrary("rise","and shine","222")