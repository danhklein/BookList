// *** constructors *** //

var Book = function(attributes) {
  this.title = attributes.title;
  this.genre = attributes.genre;
  this.author = attributes.author;
  this.read = false;
  this.startDate = '';
  this.endDate = '';
};

var BookList = function() {
  this.numRead = 0;
  this.numNotRead = 0;
  this.nextBook = '';
  this.currentBook = '';
  this.lastBook = '';
  this.bookArr = [];
};


// *** methods **** //

BookList.prototype.addBook = function(book) {
  this.bookArr.push(book);
  this.numNotRead += 1;
  if (this.currentBook === '') {
    this.currentBook = book;
  } else if (this.nextBook === '') {
    this.nextBook = book;
  }
};

BookList.prototype.startCurrentBook = function() {
  this.currentBook.startDate = new Date(Date.now());
};

BookList.prototype.finishCurrentBook = function() {
  this.numRead += 1;
  this.numNotRead -= 1;
  this.currentBook.read = true;
  this.currentBook.endDate = new Date(Date.now());
  this.lastBook = this.currentBook;
  this.currentBook = this.nextBook;
  var index = this.bookArr.indexOf(this.currentBook);
  this.nextBook = this.bookArr[index + 1] || '';
};

BookList.prototype.renderToDom = function() {
  for (var i = 0; i < this.bookArr.length; i++) {
    $('#books').append('<tr><td>' + this.bookArr[i].title +
      '</td><td>' + this.bookArr[i].genre +
      '</td><td>'+ this.bookArr[i].author +
      '</td><td>' + this.bookArr[i].read + '</td></tr>');
  }
  if(myBooks.numNotRead > 0) {
    $('#books').append('<br><button id="read" class="btn btn-primary btn-md">Read Next Book!</button>');
  }
};

var myBookList = new BookList();
var book1 = new Book({
  title: 'Labyrinths',
  genre: 'Magical Realism',
  author: 'Jorge Luis Borges'
});

var book2 = new Book ({
  title: 'History of God',
  genre: 'Philosophy',
  author: 'Karen Armstrong'
});

var book3 = new Book ({
  title: 'Wind-up Bird Chronicles',
  genre: 'Fiction',
  author: 'Huraki Murakami'
});

myBookList.addBook(book1);
myBookList.addBook(book2);
myBookList.addBook(book3);

console.log(myBookList);


var BookList = function () {

}