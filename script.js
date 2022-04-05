
let myLibrary = [];
let i=0
let container = document.querySelector('.container')
let cardContainer = document.getElementById('card-container')

function CreateBook(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = "Read"
    this.toggleRead = function(){
        this.read === "Read" ? this.read = "Not Read" : this.read = "Read"
    }
}

function addBookToLibrary(title,author,pages,read) {
    const myBook = new CreateBook(title,author,pages,read);
    myLibrary.push(myBook);
    return myLibrary
}

function displayBooks(array){
  let cardContainer = document.getElementById('card-container')
    // for (let i = 0 ; i < myLibrary.length ; i++){

      let card = document.createElement('div');

      let cardTitle = document.createElement('div');
      cardTitle.textContent = `Title: ${array[i].title}`;
      card.appendChild(cardTitle);

      let cardAuthor = document.createElement('div');
      cardAuthor.textContent = `Author:  ${array[i].author}`;
      card.appendChild(cardAuthor);
      
      let cardPages = document.createElement('div');
      cardPages.textContent = `Pages: ${array[i].pages}`;
      card.appendChild(cardPages);

      let btnRead = document.createElement('button');
      btnRead.textContent = array[i].read
      btnRead.addEventListener('click', function(){
          array[i].toggleRead()
          btnRead.textContent = array[i].read
      })
      card.appendChild(btnRead)

      //Remove listener 

      let btnDelete = document.createElement('button');
      btnDelete.addEventListener('click',function(){
          cardContainer.removeChild(card)
      })

      btnDelete.classList.add('delete')
      btnDelete.textContent = "X"
      card.appendChild(btnDelete)
        
      card.classList.add('card');
      cardContainer.appendChild(card);
}

let addBtn = document.getElementById('add-book');

//Create form with button press

addBtn.addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display ='flex' 
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display ='none'
})

document.getElementById('create-book').addEventListener('click', function(){
    addBookToLibrary(document.getElementById('book-title').value,
    document.getElementById('book-author').value,
    document.getElementById('book-pages').value);
    displayBooks(myLibrary)
    ++i
    document.querySelector('.bg-modal').style.display ='none'
    document.getElementById('book-title').value = ""
    document.getElementById('book-author').value = ""
    document.getElementById('book-pages').value = ""
})