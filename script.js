function CreateBook(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
        return `The ${this.title} by ${this.author}, ${this.pages}`
    }
}

const book = new CreateBook("Hobbit","J.R.Tolkien","252")

console.log(book.info());