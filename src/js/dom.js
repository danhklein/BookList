// $(document).ready(function() {
//   myBookList.rendertoDom();
// });

// $('form').on('submit', function(event) {
//   event.preventDefault();
//   var newBook = new Book ({
//     title: $('#book-title').val(),
//     genre: $('#book-genre').val,
//     author: $('#book-author').val
//   });
//   myBookList.addBook(newBook);
//   $('#books').empty();
//   myBookList.rendertoDom();
//    $('#book-title').val('');
//    $('#book-genre').val('');
//    $('#book-author').val('');

// });

$(document).ready(function(){
    myBookList.renderToDom();
});

$("form").on("submit", function(event){
    event.preventDefault();
    var newBook = new Book({
        title: $("#book-title").val(),
        genre: $("#book-genre").val(),
        author: $("#book-author").val()
    });

    myBookList.addBook(newBook);
    $("#books").empty();
    myBookList.renderToDom();
    $("#book-title").val("");
    $("#book-genre").val("");
    $("#book-author").val("");
});

$(document).on('click','#read',function(){
  myBookList.startCurrentBook();
  $(this).hide();
  $('#current').html(myBookList.currentBook.title);
  $("#current").append('<br><button id="finish" class="btn btn-danger btn-md">Finished!</button>')
});