// add scripts

  console.log('sanity check!');

var Book = function (attributes) {
this.title = attributes.title;
this.genre = attributes.genre;
this.author = attributes.author
this.read =false;
this.startDate ="";
this.endDate="";
  this.startDate = new Date();
  this.endDate = function() {
    if (this.read = true) {
      return new Date() }
    else return "Unfinished";
  };
};

var BookList = function () {
  this.numRead = 0;
  this.numNotRead = 0;
  this.nextBook = "";
  this.currentBook = "";
  this.lastBook = "";
  this.bookArr = [];
};

BookList.prototype.addBook = function(book) {
  this.bookArr.push(book);
  if (this.currentBook ==='') {
    this.currentBook = book;
  } else if (this.nextBook=== '') {
    this.nextBook = book;
  }
};

Book.prototype.finishCurrentBook = function() {
  this.numRead += 1;
  this.numNotRead -= 1;
  this.currentBook.read = true;
  this.currentBook.endDate = new Date(Date.now());
  this.lastBook = this.currentBook;
  this.currentBook = this.nextBook;
  var index = this.bookArr.indexOf(currentBook);
  this.nextBook = this.bookArr[index+1] || '';
};

BookList.prototype.startCurrentBook = function(first_argument) {
  this.currentBook.startDate = newDate(Date.now());
};

BookList.prototype.renderToDom = function(){
    for (var i = 0; i < this.bookArr.length; i++) {
        $("#books").append("<li>" +
            this.bookArr[i].title +
            "&nbsp; &nbsp;"+
            this.bookArr[i].read +
            "</li>");
    }
    $("#books").append("<br><button id='read' class='btn btn-success' btn-xs'>Read Me</button>");
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