
let myLibrary = [];
let i=0;
let container = document.querySelector('.container');
let cardContainer = document.getElementById('card-container');

function CreateBook(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = true;
    this.toggleRead = function(){
        this.read ? this.read = false : this.read = true;
    }
}

function addBookToLibrary(title,author,pages) {

    const myBook = new CreateBook(title,author,pages);
    myLibrary.push(myBook);
}


function displayBooks(array){
  let cardContainer = document.getElementById('card-container');
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
      btnRead.dataset.index = i;
      array[i].read ? btnRead.textContent = "Read" : btnRead.textContent = "Not Read";

      btnRead.addEventListener('click', function(){
        array[btnRead.dataset.index].toggleRead();
        array[btnRead.dataset.index].read ? btnRead.textContent = "Read" : btnRead.textContent = "Not Read";
      })

      card.appendChild(btnRead);

      //Remove listener 

      let btnDelete = document.createElement('button');
      btnDelete.addEventListener('click',function(){
          cardContainer.removeChild(card);
      })

      btnDelete.classList.add('delete');
      btnDelete.textContent = "X";
      card.appendChild(btnDelete);
        
      card.classList.add('card');
      cardContainer.appendChild(card);
}

let addBtn = document.getElementById('add-book');

//Create form with button press

addBtn.addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display ='flex';
});

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display ='none';
})

document.getElementById('create-book').addEventListener('click', function(){
    addBookToLibrary(document.getElementById('book-title').value,
                        document.getElementById('book-author').value,
                            document.getElementById('book-pages').value);
    displayBooks(myLibrary);
    ++i;
    document.querySelector('.bg-modal').style.display ='none';
    document.getElementById('book-title').value = "";
    document.getElementById('book-author').value = "";
    document.getElementById('book-pages').value = "";
})

