let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
            myBookIndex: 0,
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks()
{
    const booksDiv = books.map((book,index) => `<h1>book Number: ${index + 1}</h1>
    ${book.myBookIndex = index + 1}
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><strong>Book Description: </strong>${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber}mins</p>
    <button onclick="deleteBook(${book.myBookIndex})">Delete book</button>`)
    document.getElementById('books').innerHTML = booksDiv;
}

function clearInputs()
{
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

/*Search for the index we're currently in (the button is currently in)
Once you get that index, assign it to a variable for now, then use splice to cut it from array
*/
function deleteBook(index)
{
    books.splice(index-1,1);
    showbooks();
}