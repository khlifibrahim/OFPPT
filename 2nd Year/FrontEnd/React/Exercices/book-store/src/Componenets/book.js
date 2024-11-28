import React from 'react'

function Book({title, author, genre, year, rating}) {
  return (
    <div style= {{
        backgroundColor: '#c3c3c3',
        borderRadius: '10px',
        border: '1px solid #8393ff',
        width:'280px'
      }}>
        <h2>{title}</h2>
        <p>Author: {author}</p>
        <span>Genre: {genre}</span> - <span>Year: {year}</span>
        <p>{rating}</p>
    </div>
  )
}

export default Book