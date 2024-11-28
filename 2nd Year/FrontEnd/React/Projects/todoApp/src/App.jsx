// import { useState } from 'react'
import Book from './Components/Book'
import './App.css'
import { useState } from 'react';

function App() {

  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState(
    {
      code: '',
      title: '',
      price: '',
    }
  )
  const [editIndex, setEditIndex] = useState(null)
  const [btnState, setBtnState] = useState('Add Book')

  const handleChange = (e) => {
    const {name, value} = e.target;
    setNewBook({ ...newBook, [name]: value})
  }

  const addBook = ()=> {
    if(newBook.code.trim() && newBook.title.trim() && newBook.price.trim()) {
      if(editIndex !== null) {
        const updateBooks = [...books];
        updateBooks[editIndex] = newBook;
        setBooks(updateBooks)
        setEditIndex(null);
      }else {
        setBooks([...books, newBook])
      }
      

      setNewBook({ code: '', title: '', price: ''});
      setBtnState('Add Book')
    }
  }

  const editBook = (index) => {
    const bookEdit = books[index]
    setBtnState('Update Book')
    setNewBook(bookEdit)
    setEditIndex(index)
    console.log(bookEdit)
  }

  const deleteBook = (index) => {
    const updateBooks = books.filter((_, i) => i !== index);
    setBooks(updateBooks)
  }

  return (
    <>
      <div className="App ">
        <div className="header m-8">
          <h1 className='font-bold text-2xl'>Books</h1>
        </div>

        <div className="todo-container">
            <div className="todo-inputs flex gap-2">
              <div className="todo-input !basis-1/4 text-left">
                <label className='mr-1 pl-2' htmlFor="">Code</label><br />
                <input
                  name='code'
                  value={newBook.code}
                  onChange={handleChange}
                  className='px-2 py-3 rounded-md' 
                  type="text" 
                  placeholder='Book code' />
              </div>
              <div className="todo-input !basis-1/2  text-left">
                <label className='mr-1 pl-2' htmlFor="">Title</label><br />
                <input
                  name='title'
                  value={newBook.title}
                  onChange={handleChange}
                  className='px-2 py-3 rounded-md' 
                  type="text" 
                  placeholder='Book title' />
              </div>
              <div className="todo-input !basis-1/4 text-left">
                <label className='mr-1 pl-2' htmlFor="">Price</label><br />
                <input
                  name='price'
                  value={newBook.price}
                  onChange={handleChange}                
                  className='px-2 py-3 rounded-md' 
                  type="text" 
                  placeholder='Book price' />
              </div>
            </div>
            <div className="todo-input my-8">
              <button className='bg-[#1a1a1a] hover:bg-[#646cff] w-full py-3'
                onClick={addBook}
              >{btnState}</button>
            </div>
          </div>

          <div className="todo-list">
            <div className="todo-list-header flex justify-between px-4 py-3 w-full gap-4">
            <p className='text-left basis-1/4'>Code</p>
              <p className='text-left basis-1/2'>Title</p>
              <p className='text-left basis-1/4'>Price</p>
              <p className='basis-1/4 text-right'>Actions</p>
            </div>
            <div className="todo-item ">
              {books.map((el, i) => (
                <Book key={i} code={el.code} title={el.title} price={el.price} index={i} deleteBook={deleteBook} editeBook={editBook}/>
              ))}
              {/* {bookList.map(el => (
                <Book key={el.id} code={el.code} title={el.title} price={el.price} />
              ))} */}
            </div>
          </div>
      </div>
    </>
  )
}

export default App
