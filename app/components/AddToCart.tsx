'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>console.log("server componets dont have interactivity so this is from client componet")}>ProductCard:Addtocard</button>
    </div>
  )
}

export default AddToCart