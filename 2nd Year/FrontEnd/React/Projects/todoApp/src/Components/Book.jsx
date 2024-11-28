// import React from 'react'
import { IconEdit, IconTrash  } from '@tabler/icons-react';

function Book({code, title, price, deleteBook, editeBook, index}) {
  return (
      <div className="container bg-neutral-700 my-4 rounded-md t">
          <div className='flex justify-between px-4 py-3 w-full gap-4'>
              <p className='text-left basis-1/4'>{code}</p>
              <p className='text-left basis-1/2'>{title}</p>
              <p className='text-left basis-1/4'>{price}</p>

              <div className="action basis-1/4 text-right">
                <button 
                className='edit'
                onClick={()=> {editeBook(index)}}
                >
                    <IconEdit stroke={2} />
                </button>
                <button 
                className='delete'
                onClick={()=> deleteBook(index)}
                >
                    <IconTrash stroke={2} />
                </button>
            </div>
          </div>
      </div>
  )
}

export default Book