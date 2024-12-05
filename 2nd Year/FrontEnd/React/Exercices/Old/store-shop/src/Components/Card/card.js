import React from 'react'

function card({url, title, price,tag, rating}) {
  return (
    <div className='w-[640px] bg-white flex items-center gap-8 rounded-3xl overflow-hidden p-2 font-medium'>
        <div className="product-image min-w-72 w-72 h-44 rounded-2xl overflow-hidden cursor-pointer">
            <img className='bg-cover size-full' src={url} alt="" />
        </div>
        <div className="details w-full  text-left text-slate-500">
            <div className="title text-zinc-800 font-semibold text-2xl">{title}</div>
            <div className='bg-sky-500/20 w-12 h-[28px] mb-2 text-center rounded-xl text-sky-500'>{tag}</div>
            <div cassName="">
                <span className="price">${price}</span>
                <span className="rating ml-12 ">{rating} unites</span>
            </div>

            <button className='w-auto h-[44px] px-[24px] mt-4 bg-sky-400 rounded-lg text-white font-medium cursor-pointer'>Add to Cart</button>
        </div>
    </div>
  )
}

export default card