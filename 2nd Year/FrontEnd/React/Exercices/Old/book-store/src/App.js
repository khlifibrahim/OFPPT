import './App.css';
import Book from './Componenets/book/'

function App() {

  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      rating: 4.8
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      rating: 4.7
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      year: 1925,
      rating: 4.4
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      year: 1951,
      rating: 4.3
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      rating: 4.6
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure",
      year: 1851,
      rating: 4.1
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      year: 1937,
      rating: 4.7
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Science Fiction",
      year: 1932,
      rating: 4.5
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical Fiction",
      year: 1869,
      rating: 4.8
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Psychological Fiction",
      year: 1866,
      rating: 4.6
    }
  ];
  

  return (
    <div className="App">
      {books.map((book, i) =>(
        <Book
          key={i}
          title={book.title}
          author={book.author}
          genre={book.genre}
          year={book.year}
        />
      ))}
    </div>
  );
}

export default App;
